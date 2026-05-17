interface Env {
  RESEND_API_KEY: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = await context.request.json<ContactFormData>();

    // Validation
    if (!body.name?.trim()) {
      return new Response(JSON.stringify({ error: 'Name is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!body.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return new Response(JSON.stringify({ error: 'Valid email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!body.message?.trim()) {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = context.env.RESEND_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Server configuration error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const subjectMap: Record<string, string> = {
      general: 'General Inquiry',
      course: 'Course Enrollment',
      booking: 'Service Booking',
      partnership: 'Partnership',
      other: 'Other',
    };

    const subjectLine = body.subject
      ? `[${subjectMap[body.subject] || body.subject}] New message from ${body.name}`
      : `New message from ${body.name}`;

    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(body.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
      ${body.phone ? `<p><strong>Phone:</strong> ${escapeHtml(body.phone)}</p>` : ''}
      ${body.subject ? `<p><strong>Subject:</strong> ${escapeHtml(subjectMap[body.subject] || body.subject)}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(body.message).replace(/\n/g, '<br>')}</p>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'HARSHOLLASHA Contact <contact@harshollasha.in>',
        to: ['gurujiyak@gmail.com'],
        reply_to: body.email,
        subject: subjectLine,
        html: htmlContent,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json().catch(() => ({}));
      console.error('Resend error:', errorData);
      return new Response(JSON.stringify({ error: 'Failed to send email. Please try again later.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await resendResponse.json();

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Contact API error:', err);
    return new Response(JSON.stringify({ error: 'Something went wrong. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

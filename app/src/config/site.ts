export const SITE_CONFIG = {
  phone: {
    display: import.meta.env.VITE_PHONE_DISPLAY || '+91 89399 64445',
    tel: import.meta.env.VITE_PHONE_TEL || '+918939964445',
    whatsapp: import.meta.env.VITE_PHONE_WHATSAPP || '918939964445',
  },
  email: import.meta.env.VITE_EMAIL || 'info@harshollasha.in',
} as const;

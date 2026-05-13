export default function ContactHeroSection() {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center bg-green-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-green-800/30 rounded-full blur-3xl" />
      <div className="relative z-10 text-center px-4 pt-24 pb-12">
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white">Get in Touch</h1>
        <p className="font-body text-white/80 mt-4 max-w-lg mx-auto">
          We&apos;d love to hear from you. Reach out for consultations, course inquiries, or any questions.
        </p>
      </div>
    </section>
  );
}

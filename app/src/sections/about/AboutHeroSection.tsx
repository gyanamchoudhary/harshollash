export default function AboutHeroSection() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-green-950">
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 to-green-950/60" />
      <div className="absolute inset-0 bg-[url('/images/about-story-image.jpg')] bg-cover bg-center opacity-30" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="relative z-10 text-center px-4 pt-24 pb-12">
        <p className="font-body text-sm text-white/60 mb-3">Home / About</p>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white">About Us</h1>
        <p className="font-body text-white/80 mt-4 max-w-lg mx-auto">
          Our journey towards spreading inner joy and wellness across the world
        </p>
      </div>
    </section>
  );
}

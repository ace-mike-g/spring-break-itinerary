export default function HeroSection() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-gradient-to-br from-hot-pink via-electric-orange to-cyan-blue text-white">
      {/* Neon glow effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-neon-green blur-3xl" />
        <div className="absolute right-20 bottom-20 h-48 w-48 rounded-full bg-cyan-blue blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-24 w-24 rounded-full bg-hot-pink blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
          March 20–25, 2026
        </p>
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          Welcome to Austin!
        </h1>
        <p className="mb-6 text-xl font-light text-white/90 sm:text-2xl">
          The Griskos, Rommes &amp; Beres are taking over Texas
        </p>
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
          <span>6 days</span>
          <span className="text-white/50">&middot;</span>
          <span>3 families</span>
          <span className="text-white/50">&middot;</span>
          <span>1 amazing trip</span>
        </div>
      </div>
    </section>
  );
}

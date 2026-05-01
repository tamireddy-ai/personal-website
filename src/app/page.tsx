export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-16 pt-8 sm:px-10 lg:px-12">
        <nav className="mb-14 flex items-center justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/70 px-5 py-4 backdrop-blur">
          <p className="text-sm font-semibold tracking-[0.2em] text-zinc-300">
            PORTFOLIO
          </p>
          <ul className="flex items-center gap-5 text-sm text-zinc-300 sm:gap-8">
            <li>
              <a className="transition hover:text-white" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="transition hover:text-white" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="transition hover:text-white" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="transition hover:text-white" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <section id="home" className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.22em] text-zinc-400">
            Full-Stack Developer
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m Tamireddy
            <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              Building clean digital experiences
            </span>
          </h1>
          <p className="max-w-2xl text-lg text-zinc-300">
            I design and build modern web products with performance, clarity, and
            great user experience in mind.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 font-medium text-cyan-300 transition hover:bg-cyan-500/20 hover:text-cyan-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 font-medium text-zinc-200 transition hover:border-zinc-500 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="mailto:hello@example.com"
              className="rounded-xl border border-violet-400/30 bg-violet-500/10 px-5 py-3 font-medium text-violet-300 transition hover:bg-violet-500/20 hover:text-violet-200"
            >
              Email
            </a>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
            <p className="text-sm text-zinc-400">Years Experience</p>
            <p className="mt-2 text-3xl font-semibold text-white">5+</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
            <p className="text-sm text-zinc-400">Projects Completed</p>
            <p className="mt-2 text-3xl font-semibold text-white">40+</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
            <p className="text-sm text-zinc-400">Happy Clients</p>
            <p className="mt-2 text-3xl font-semibold text-white">20+</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
            <p className="text-sm text-zinc-400">Technologies</p>
            <p className="mt-2 text-3xl font-semibold text-white">15+</p>
          </div>
        </section>
      </div>
    </main>
  );
}

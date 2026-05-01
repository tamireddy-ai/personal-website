export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAV */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-xl font-bold tracking-widest">TAMIR</div>
        <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-400 mb-4">
          Portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          Tamir Eddy
          <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Hardware & Systems Engineer
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-zinc-400">
          Electrical & Electronics Engineering student specializing in Control Systems.
          Strong background in hardware, communication systems and infrastructure.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap">
          <a
            href="https://www.linkedin.com/in/tamireddy/"
            target="_blank"
            className="px-6 py-3 rounded-full bg-white text-black font-semibold"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/tamireddy-ai"
            target="_blank"
            className="px-6 py-3 rounded-full border border-zinc-700"
          >
            GitHub
          </a>

          <a
            href="/Tamir_Eddy_CV.pdf"
            target="_blank"
            className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">About</h2>

        <p className="text-zinc-400 leading-8 max-w-3xl">
          I combine academic knowledge in Electrical Engineering with real-world
          experience from the IDF ICT Corps. I specialize in system integration,
          troubleshooting complex infrastructures and improving operational systems.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="grid gap-6">

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950">
            <h3 className="text-xl font-bold">Network Technician & IT Commander | IDF</h3>
            <p className="text-zinc-400 mt-2">2023 – Present</p>

            <ul className="mt-4 text-zinc-400 space-y-2">
              <li>Managed critical communication and computing infrastructure</li>
              <li>Led technical team and ensured system availability</li>
              <li>Performed advanced troubleshooting under pressure</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950">
            <h3 className="text-xl font-bold">Deputy Company Commander | Givati</h3>
            <p className="text-zinc-400 mt-2">2019 – 2023</p>

            <ul className="mt-4 text-zinc-400 space-y-2">
              <li>Led operations for 100+ personnel</li>
              <li>Coordinated teams and improved performance</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950">
            <h3 className="text-xl font-bold">Massuah C4I System Upgrade</h3>
            <p className="text-zinc-400 mt-3">
              Led upgrade of mission-critical operational system, improving stability
              and performance across field units.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950">
            <h3 className="text-xl font-bold">System Logic Optimization</h3>
            <p className="text-zinc-400 mt-3">
              Improved system logic and workflows, enhancing efficiency and response time.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-4xl font-bold">Contact</h2>

        <p className="mt-4 text-zinc-400">
          tamireddy@gmail.com
        </p>
      </section>

    </main>
  );
}
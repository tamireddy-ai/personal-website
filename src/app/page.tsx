export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <nav className="mb-20 flex items-center justify-between rounded-3xl bg-white/70 px-6 py-4 shadow-lg backdrop-blur">
          <div className="text-xl font-black tracking-widest text-blue-700">TE</div>

          <div className="flex gap-6 text-sm font-semibold text-slate-600">
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#skills" className="hover:text-blue-700">Skills</a>
            <a href="#experience" className="hover:text-blue-700">Experience</a>
            <a href="#projects" className="hover:text-blue-700">Projects</a>
          </div>
        </nav>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-blue-600">
              Portfolio
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Tamir Eddy
              <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                Hardware & Systems Engineer
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Electrical and Electronics Engineering student specializing in Control Systems.
              Experienced in hardware integration, communication infrastructure,
              troubleshooting, QA thinking and technical leadership.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://www.linkedin.com/in/tamireddy/" target="_blank" className="rounded-2xl bg-blue-600 px-7 py-3 font-bold text-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
                LinkedIn
              </a>

              <a href="https://github.com/tamireddy-ai" target="_blank" className="rounded-2xl bg-white px-7 py-3 font-bold text-slate-900 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
                GitHub
              </a>

              <a href="mailto:tamireddy@gmail.com" className="rounded-2xl bg-slate-900 px-7 py-3 font-bold text-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
                Email
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white/80 p-8 shadow-2xl backdrop-blur transition hover:-translate-y-3">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500">
              Current Focus
            </p>

            <h2 className="mt-4 text-3xl font-black">
              Hardware, Systems, QA & Automation
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-blue-50 p-6 text-center transition hover:-translate-y-2 hover:shadow-xl">
                <p className="text-4xl font-black text-blue-700">C/C++</p>
                <p className="mt-2 text-sm text-slate-500">Programming</p>
              </div>

              <div className="rounded-3xl bg-violet-50 p-6 text-center transition hover:-translate-y-2 hover:shadow-xl">
                <p className="text-4xl font-black text-violet-700">MATLAB</p>
                <p className="mt-2 text-sm text-slate-500">Control Systems</p>
              </div>

              <div className="rounded-3xl bg-cyan-50 p-6 text-center transition hover:-translate-y-2 hover:shadow-xl">
                <p className="text-4xl font-black text-cyan-700">IT</p>
                <p className="mt-2 text-sm text-slate-500">Infrastructure</p>
              </div>

              <div className="rounded-3xl bg-slate-100 p-6 text-center transition hover:-translate-y-2 hover:shadow-xl">
                <p className="text-4xl font-black text-slate-800">QA</p>
                <p className="mt-2 text-sm text-slate-500">Testing Mindset</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] bg-white p-10 shadow-xl transition hover:-translate-y-2">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-blue-600">
            About
          </p>

          <h2 className="text-4xl font-black">
            Engineering student with field technical experience.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            I study Electrical and Electronics Engineering at HIT, specializing in Control Systems.
            My background includes managing communication and computing infrastructure,
            solving hardware and software issues under pressure, leading technical teams,
            and supporting mission-critical systems.
          </p>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-blue-600">
          Skills
        </p>

        <h2 className="mb-8 text-4xl font-black">Technical stack</h2>

        <div className="grid gap-5 md:grid-cols-4">
          {[
            "C",
            "C++",
            "Python",
            "MATLAB",
            "Control Systems",
            "Digital Systems",
            "Microcontrollers",
            "Data Structures",
            "Networks",
            "Hardware Integration",
            "Excel",
            "System Support",
          ].map((skill) => (
            <div key={skill} className="rounded-3xl bg-white p-5 text-center font-bold shadow-lg transition hover:-translate-y-3 hover:bg-blue-600 hover:text-white hover:shadow-2xl">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-blue-600">
          Experience
        </p>

        <h2 className="mb-8 text-4xl font-black">Where I worked and led</h2>

        <div className="grid gap-6">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl transition hover:-translate-y-3 hover:shadow-2xl">
            <h3 className="text-2xl font-black">
              Network Technician & IT Department Commander
            </h3>
            <p className="mt-2 font-bold text-blue-700">ICT Corps, IDF</p>
            <p className="mt-1 text-slate-500">2023 to Today</p>

            <p className="mt-5 max-w-4xl leading-8 text-slate-600">
              Managed communication and computing infrastructure, led a technical team,
              handled troubleshooting under pressure, and maintained operational readiness
              for critical systems.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl transition hover:-translate-y-3 hover:shadow-2xl">
            <h3 className="text-2xl font-black">
              Technical Lead, Massuah C4I System Upgrade
            </h3>
            <p className="mt-2 font-bold text-violet-700">Command & Control System</p>

            <p className="mt-5 max-w-4xl leading-8 text-slate-600">
              Managed an end-to-end technical upgrade of an operational system,
              improved stability, optimized logic, and coordinated requirements
              between field users and technical teams.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16 pb-28">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-blue-600">
          Projects
        </p>

        <h2 className="mb-8 text-4xl font-black">Things I built and improved</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl transition hover:-translate-y-3 hover:shadow-2xl">
            <h3 className="text-2xl font-black">Operational System Upgrade</h3>
            <p className="mt-4 leading-8 text-slate-600">
              Improved a mission-critical C4I system through technical upgrades,
              logic optimization and workflow improvement.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl transition hover:-translate-y-3 hover:shadow-2xl">
            <h3 className="text-2xl font-black">Personal Portfolio Website</h3>
            <p className="mt-4 leading-8 text-slate-600">
              Built and deployed a responsive portfolio using Next.js, GitHub and Vercel.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
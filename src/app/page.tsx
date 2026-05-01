"use client";

import { FormEvent, useMemo, useState } from "react";

type ChatMessage = {
  role: "user" | "bot";
  text: string;
};

const CHAT_SUGGESTIONS = [
  "Who is Tamir Eddy?",
  "What is his experience in ICT Corps IDF?",
  "Which projects are featured?",
];

function getBotReply(input: string): string {
  const normalized = input.toLowerCase();

  if (normalized.includes("tamir") || normalized.includes("who") || normalized.includes("about")) {
    return "Tamir Eddy is an Electrical and Electronics Engineering student at HIT, focused on Control Systems.";
  }

  if (
    normalized.includes("hit") ||
    normalized.includes("electrical") ||
    normalized.includes("electronics")
  ) {
    return "He studies Electrical and Electronics Engineering at HIT with a practical, systems-oriented approach.";
  }

  if (normalized.includes("control")) {
    return "His specialization is Control Systems, with emphasis on stability and reliable operation.";
  }

  if (normalized.includes("hardware")) {
    return "He has hands-on experience in hardware integration and field-level technical troubleshooting.";
  }

  if (normalized.includes("network")) {
    return "He managed communication and computing infrastructure, including network operations and support.";
  }

  if (normalized.includes("qa") || normalized.includes("testing")) {
    return "He applies a strong QA mindset: structured troubleshooting, reliability focus, and continuous improvement.";
  }

  if (
    normalized.includes("experience") ||
    normalized.includes("work") ||
    normalized.includes("idf") ||
    normalized.includes("ict corps")
  ) {
    return "He served in ICT Corps IDF as a Network Technician and IT Department Commander, leading teams and maintaining mission-critical systems.";
  }

  if (normalized.includes("operational system") || normalized.includes("upgrade")) {
    return "Operational System Upgrade: he led a technical C4I system upgrade to improve stability, logic, and workflow.";
  }

  if (
    normalized.includes("project") ||
    normalized.includes("portfolio website") ||
    normalized.includes("personal portfolio")
  ) {
    return "Featured projects are the Operational System Upgrade and the Personal Portfolio Website built with Next.js, GitHub, and Vercel.";
  }

  return "I can answer About, Experience, and Projects questions. Try: Tamir Eddy, HIT studies, ICT Corps IDF, or featured projects.";
}

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      text: "Hi, I am Tamir's site assistant. Ask me about his background, experience, or projects.",
    },
  ]);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = { role: "user", text: trimmed };
    const botMessage: ChatMessage = { role: "bot", text: getBotReply(trimmed) };
    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <nav className="mb-20 flex items-center justify-between rounded-3xl bg-white/70 px-6 py-4 shadow-lg backdrop-blur">
          <div className="text-xl font-black tracking-widest text-blue-700">TE</div>

          <div className="flex gap-6 text-sm font-semibold text-slate-600">
            <a href="#about" className="hover:text-blue-700">
              About
            </a>
            <a href="#skills" className="hover:text-blue-700">
              Skills
            </a>
            <a href="#experience" className="hover:text-blue-700">
              Experience
            </a>
            <a href="#projects" className="hover:text-blue-700">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-700">
              Contact
            </a>
          </div>
        </nav>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold tracking-[0.4em] text-blue-600 uppercase">
              Portfolio
            </p>

            <h1 className="text-5xl leading-tight font-black md:text-7xl">
              Tamir Eddy
              <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                Hardware & Systems Engineer
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Electrical and Electronics Engineering student specializing in Control Systems.
              Experienced in hardware integration, communication infrastructure, troubleshooting, QA
              thinking and technical leadership.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/tamireddy/"
                target="_blank"
                className="rounded-2xl bg-blue-600 px-7 py-3 font-bold text-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/tamireddy-ai"
                target="_blank"
                className="rounded-2xl bg-white px-7 py-3 font-bold text-slate-900 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                GitHub
              </a>

              <a
                href="mailto:tamireddy@gmail.com"
                className="rounded-2xl bg-slate-900 px-7 py-3 font-bold text-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                Email
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white/80 p-8 shadow-2xl backdrop-blur transition hover:-translate-y-3">
            <p className="text-sm font-bold tracking-[0.3em] text-slate-500 uppercase">
              Current Focus
            </p>

            <h2 className="mt-4 text-3xl font-black">Hardware, Systems, QA & Automation</h2>

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
          <p className="mb-4 text-sm font-bold tracking-[0.4em] text-blue-600 uppercase">About</p>

          <h2 className="text-4xl font-black">
            Engineering student with field technical experience.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            I study Electrical and Electronics Engineering at HIT, specializing in Control Systems.
            My background includes managing communication and computing infrastructure, solving
            hardware and software issues under pressure, leading technical teams, and supporting
            mission-critical systems.
          </p>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-sm font-bold tracking-[0.4em] text-blue-600 uppercase">Skills</p>

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
            <div
              key={skill}
              className="rounded-3xl bg-white p-5 text-center font-bold shadow-lg transition hover:-translate-y-3 hover:bg-blue-600 hover:text-white hover:shadow-2xl"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-sm font-bold tracking-[0.4em] text-blue-600 uppercase">
          Experience
        </p>

        <h2 className="mb-8 text-4xl font-black">Where I worked and led</h2>

        <div className="grid gap-6">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl transition hover:-translate-y-3 hover:shadow-2xl">
            <h3 className="text-2xl font-black">Network Technician & IT Department Commander</h3>
            <p className="mt-2 font-bold text-blue-700">ICT Corps, IDF</p>
            <p className="mt-1 text-slate-500">2023 to Today</p>

            <p className="mt-5 max-w-4xl leading-8 text-slate-600">
              Managed communication and computing infrastructure, led a technical team, handled
              troubleshooting under pressure, and maintained operational readiness for critical
              systems.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl transition hover:-translate-y-3 hover:shadow-2xl">
            <h3 className="text-2xl font-black">Technical Lead, Massuah C4I System Upgrade</h3>
            <p className="mt-2 font-bold text-violet-700">Command & Control System</p>

            <p className="mt-5 max-w-4xl leading-8 text-slate-600">
              Managed an end-to-end technical upgrade of an operational system, improved stability,
              optimized logic, and coordinated requirements between field users and technical teams.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-sm font-bold tracking-[0.4em] text-blue-600 uppercase">Projects</p>

        <h2 className="mb-8 text-4xl font-black">Things I built and improved</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl transition hover:-translate-y-3 hover:shadow-2xl">
            <h3 className="text-2xl font-black">Operational System Upgrade</h3>
            <p className="mt-4 leading-8 text-slate-600">
              Improved a mission-critical C4I system through technical upgrades, logic optimization
              and workflow improvement.
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

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 pb-28">
        <div className="rounded-[2rem] bg-white p-10 shadow-xl transition hover:-translate-y-2">
          <p className="mb-4 text-sm font-bold tracking-[0.4em] text-blue-600 uppercase">Contact</p>

          <h2 className="mb-4 text-4xl font-black">Let’s get in touch</h2>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
            I am an Electrical and Electronics Engineering student at HIT, focused on control
            systems, hardware and system reliability.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
            I am open to internships and student roles in hardware, systems and QA.
          </p>

          <p className="mt-8 font-semibold text-slate-700">
            Feel free to reach out. I respond quickly.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/tamireddy/"
              target="_blank"
              className="rounded-2xl bg-blue-600 px-7 py-3 font-bold text-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tamireddy-ai"
              target="_blank"
              className="rounded-2xl bg-white px-7 py-3 font-bold text-slate-900 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              GitHub
            </a>
            <a
              href="mailto:tamireddy@gmail.com"
              className="rounded-2xl bg-slate-900 px-7 py-3 font-bold text-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      <button
        type="button"
        onClick={() => setIsChatOpen((prev) => !prev)}
        aria-label={isChatOpen ? "Close chat" : "Open chat"}
        className="fixed right-6 bottom-6 z-50 rounded-full bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-2xl transition hover:-translate-y-1 hover:bg-blue-700"
      >
        {isChatOpen ? "Close Chat" : "Chat"}
      </button>

      {isChatOpen ? (
        <div className="fixed right-6 bottom-24 z-50 w-[calc(100vw-3rem)] max-w-sm rounded-[2rem] bg-white p-4 shadow-2xl">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase">Site Chat</p>
            <button
              type="button"
              onClick={() => setIsChatOpen(false)}
              className="rounded-xl bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-200"
            >
              Close
            </button>
          </div>

          <div className="h-64 space-y-3 overflow-y-auto rounded-2xl bg-slate-50 p-3">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-6 shadow ${
                  message.role === "user"
                    ? "ml-auto bg-blue-600 text-white"
                    : "bg-white text-slate-700"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {CHAT_SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => sendMessage(suggestion)}
                className="rounded-xl bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700 transition hover:-translate-y-0.5 hover:bg-violet-100"
              >
                {suggestion}
              </button>
            ))}
          </div>

          <form onSubmit={onSubmit} className="mt-3 flex gap-2">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about About, Experience, or Projects..."
              className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 transition outline-none focus:border-blue-400"
            />
            <button
              type="submit"
              disabled={!canSend}
              className="rounded-2xl bg-cyan-600 px-4 py-2 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      ) : null}
    </main>
  );
}

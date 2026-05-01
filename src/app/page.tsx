export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 text-gray-900 font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-6">Tamir Eddy</h1>

        <p className="text-xl mb-10 text-gray-600">
          Hardware & Systems Engineer
        </p>

        <div className="flex gap-4 mb-16 flex-wrap">
          <a href="https://www.linkedin.com/in/tamireddy/" target="_blank" className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:scale-105 transition">
            LinkedIn
          </a>

          <a href="https://github.com/tamireddy-ai" target="_blank" className="px-6 py-3 rounded-xl bg-white border border-gray-300 hover:scale-105 transition">
            GitHub
          </a>

          <a href="/cv.pdf" target="_blank" className="px-6 py-3 rounded-xl bg-purple-600 text-white hover:scale-110 transition shadow-lg">
            Download CV
          </a>
        </div>

        <a href="/cv.pdf" target="_blank" className="block mb-16 p-6 rounded-2xl bg-white shadow-lg hover:scale-105 hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold mb-2">My Resume</h3>
          <p className="text-gray-600">Click to view or download my full CV</p>
        </a>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white shadow-lg hover:scale-105 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">Systems</h3>
            <p className="text-gray-600">Embedded, hardware integration, real-time systems</p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-lg hover:scale-105 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">Development</h3>
            <p className="text-gray-600">Python, MATLAB, automation, data pipelines</p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-lg hover:scale-105 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2">Data</h3>
            <p className="text-gray-600">Analysis, optimization, decision support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
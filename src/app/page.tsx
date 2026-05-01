export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 text-gray-900 font-sans">

      <div className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold mb-6">
          Tamir Eddy
        </h1>

        <p className="text-xl mb-10 text-gray-600">
          Hardware & Systems Engineer
        </p>

        <div className="flex gap-4 mb-16">
          <a href="https://www.linkedin.com/in/tamireddy/" target="_blank"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:scale-105 transition">
            LinkedIn
          </a>

          <a href="https://github.com/tamireddy-ai" target="_blank"
            className="px-6 py-3 rounded-xl border border-gray-300 hover:scale-105 transition">
            GitHub
          </a>

          <a href="/cv.pdf" target="_blank"
            className="px-6 py-3 rounded-xl bg-purple-600 text-white hover:scale-110 transition shadow-lg">
            Download CV
          </a>
        </div>

        {/* CV CARD */}
        <div className="mb-16">
          <div className="card cursor-pointer"
               onClick={() => window.open('/cv.pdf', '_blank')}>
            <h3>My Resume</h3>
            <p>Click to view or download my full CV</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="card">
            <h3>Systems</h3>
            <p>Embedded, hardware integration, real-time systems</p>
          </div>

          <div className="card">
            <h3>Development</h3>
            <p>Python, MATLAB, automation, data pipelines</p>
          </div>

          <div className="card">
            <h3>Data</h3>
            <p>Analysis, optimization, decision support</p>
          </div>

        </div>

      </div>

      <style jsx>{`
        .card {
          padding: 24px;
          border-radius: 16px;
          background: white;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        p {
          color: #555;
        }
      `}</style>

    </div>
  );
}
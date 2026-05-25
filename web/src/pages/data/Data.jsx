import { motion } from "framer-motion";

function Data() {
  const projects = [
    {
      name: "Portfolio Website",
      tech: "React, Vite",
      status: "Completed",
      year: 2026,
    },
    {
      name: "Greeting App",
      tech: "React Native, Expo",
      status: "Completed",
      year: 2026,
    },
    {
      name: "Weather Dashboard",
      tech: "React, API",
      status: "In Progress",
      year: 2026,
    },
    {
      name: "Task Manager",
      tech: "Node.js, Express",
      status: "Planned",
      year: 2026,
    },
    {
      name: "E-Commerce Store",
      tech: "Next.js, Stripe",
      status: "Planned",
      year: 2026,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-500/15 text-emerald-300 border-emerald-400/20";
      case "In Progress":
        return "bg-cyan-500/15 text-cyan-300 border-cyan-400/20";
      case "Planned":
        return "bg-yellow-500/15 text-yellow-300 border-yellow-400/20";
      default:
        return "bg-white/10 text-white border-white/10";
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white relative overflow-hidden px-4 sm:px-6 md:px-10 py-16">
      {/* Background glow */}
      <div className="absolute top-[-120px] left-[-120px] w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-80 h-80 bg-indigo-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto mt-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="inline-flex px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Projects Overview
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold">My Projects</h1>

          <p className="text-slate-400 mt-2">
            A summary of recent and upcoming builds
          </p>
        </motion.div>

        {/* DESKTOP TABLE */}
        <div className="hidden md:block">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            {/* Table header */}
            <div className="grid grid-cols-4 text-sm text-slate-400 border-b border-white/10 px-6 py-4">
              <span>Project</span>
              <span>Technology</span>
              <span>Status</span>
              <span>Year</span>
            </div>

            {/* Rows */}
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                variants={item}
                className="grid grid-cols-4 px-6 py-5 border-b border-white/10 hover:bg-white/5 transition"
              >
                <span className="font-medium">{project.name}</span>
                <span className="text-slate-300">{project.tech}</span>

                <span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs border ${getStatusStyle(
                      project.status,
                    )}`}
                  >
                    {project.status}
                  </span>
                </span>

                <span className="text-slate-400">{project.year}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* MOBILE / TABLET CARDS */}
        <div className="md:hidden space-y-4">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="font-semibold text-lg">{project.name}</h2>

                <span
                  className={`px-3 py-1 rounded-full text-xs border ${getStatusStyle(
                    project.status,
                  )}`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-slate-300 text-sm mb-2">
                <span className="text-slate-400">Tech:</span> {project.tech}
              </p>

              <p className="text-slate-400 text-sm">Year: {project.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Data;

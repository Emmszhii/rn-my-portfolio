import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchGitHubRepos } from "../../lib/github";
import { trackProjectClick } from "../../lib/track-utils";

function About() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const username = "Emmszhii";

  useEffect(() => {
    async function loadRepos() {
      const repos = await fetchGitHubRepos(username);

      const filtered = repos
        .filter((r) => !r.fork)
        .sort((a, b) => b.stars - a.stars)
        .slice(0, 9);

      setProjects(filtered);
      setLoading(false);
    }

    loadRepos();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-56 sm:w-80 h-56 sm:h-80 bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] w-56 sm:w-80 h-56 sm:h-80 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-26 sm:pt-24">
        {/* HERO */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={container}
          className="
            backdrop-blur-xl 
            bg-white/5 
            border border-white/10 
            rounded-3xl 
            p-6 sm:p-8 md:p-10 lg:p-12
            shadow-2xl
          "
        >
          <div
            className="
              flex flex-col 
              lg:flex-row 
              items-start 
              lg:items-center 
              justify-between 
              gap-10
            "
          >
            {/* Left */}
            <motion.div
              variants={item}
              className="
                flex flex-col 
                sm:flex-row 
                items-start 
                sm:items-center 
                gap-5 sm:gap-6
                w-full
              "
            >
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <img
                  src={`https://github.com/${username}.png`}
                  alt="profile"
                  className="
                    w-20 h-20 
                    sm:w-24 sm:h-24
                    rounded-3xl 
                    border border-white/10 
                    shadow-xl
                  "
                  loading="lazy"
                />

                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 border-4 border-[#0f172a] rounded-full" />
              </div>

              {/* Text */}
              <div className="min-w-0">
                {/* Badge */}
                <div className="inline-flex px-4 py-1 rounded-full bg-cyan-500/20 mb-4">
                  <p className="text-cyan-300 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
                    Full Stack Developer
                  </p>
                </div>

                {/* Heading */}
                <h1
                  className="
                    text-3xl 
                    sm:text-4xl 
                    md:text-5xl 
                    lg:text-6xl
                    font-extrabold 
                    leading-tight
                  "
                >
                  Building{" "}
                  <span className="text-cyan-400 block sm:inline">
                    Modern Applications
                  </span>
                </h1>

                {/* Description */}
                <p
                  className="
                    text-slate-300 
                    mt-4 
                    max-w-2xl 
                    leading-7 
                    text-base sm:text-lg
                  "
                >
                  I build scalable web and mobile applications using React,
                  React Native, Node.js, and modern backend systems focused on
                  performance and elegant user experience.
                </p>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              variants={item}
              className="
                w-full sm:w-auto
                bg-white/5 
                border border-white/10 
                rounded-2xl 
                px-5 py-4
              "
            >
              <p className="text-sm text-slate-400">Live GitHub Portfolio</p>

              <p className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {projects.length} Projects
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* SECTION TITLE */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={item}
          className="mt-14 sm:mt-16 mb-8"
        >
          <div className="inline-flex px-4 py-1 rounded-full bg-indigo-500/20 mb-4">
            <p className="text-indigo-300 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
              Featured Work
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Selected Projects
          </h2>

          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Automatically synced from GitHub API
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        {loading ? (
          <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-2 
              xl:grid-cols-3 
              gap-6
            "
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="
                  h-72 
                  rounded-3xl 
                  bg-white/5 
                  border border-white/10 
                  animate-pulse
                "
              />
            ))}
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="
              grid 
              grid-cols-1 
              md:grid-cols-2 
              xl:grid-cols-3 
              gap-6
            "
          >
            {projects.map((repo) => (
              <motion.a
                key={repo.id}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackProjectClick(repo)}
                variants={item}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="
                  group 
                  rounded-3xl 
                  bg-white/5 
                  border border-white/10 
                  p-5 sm:p-6
                  backdrop-blur-xl 
                  hover:border-cyan-400/40 
                  transition-all 
                  duration-300 
                  shadow-xl
                "
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />

                      <p className="text-xs uppercase tracking-wider text-cyan-300">
                        Repository
                      </p>
                    </div>

                    <h3
                      className="
                        text-lg sm:text-xl
                        font-bold 
                        text-white 
                        group-hover:text-cyan-300 
                        transition
                        truncate
                      "
                    >
                      {repo.name}
                    </h3>
                  </div>

                  <div
                    className="
                      flex-shrink-0
                      bg-yellow-500/10 
                      border border-yellow-400/20 
                      px-3 py-1 
                      rounded-xl 
                      text-xs sm:text-sm 
                      text-yellow-300
                    "
                  >
                    ★ {repo.stars}
                  </div>
                </div>

                {/* Description */}
                <p
                  className="
                    text-slate-300 
                    leading-7 
                    line-clamp-3 
                    min-h-[80px]
                    text-sm sm:text-base
                  "
                >
                  {repo.description || "No description provided."}
                </p>

                {/* Footer */}
                <div
                  className="
                    mt-6 
                    pt-5 
                    border-t border-white/10 
                    flex flex-col sm:flex-row 
                    items-start sm:items-center 
                    justify-between 
                    gap-2
                    text-xs sm:text-sm
                  "
                >
                  <span className="text-slate-400">
                    {repo.language || "Unknown"}
                  </span>

                  <span className="text-slate-500">
                    {new Date(repo.updated).toLocaleDateString()}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* FOOTER */}
        <footer
          className="
            mt-16 mb-5 sm:mt-20 
            border-t border-white/10 
            pt-8 
            flex flex-col md:flex-row 
            items-center 
            justify-between 
            gap-4 
            text-xs sm:text-sm 
            text-slate-500
          "
        >
          <p className="text-center md:text-left">
            Built with React + TailwindCSS + Framer Motion
          </p>

          <p>
            © {new Date().getFullYear()} {username}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default About;

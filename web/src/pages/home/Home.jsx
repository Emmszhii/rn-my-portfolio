import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 sm:px-6 md:px-8 pt-25 md:pt-30 lg:pt-10 pb-5 relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-120px] left-[-120px] w-52 sm:w-72 h-52 sm:h-72 bg-cyan-500/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-120px] right-[-120px] w-52 sm:w-72 h-52 sm:h-72 bg-indigo-500/20 rounded-full blur-3xl"
      />

      {/* Main Card */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="
          relative z-10 
          w-full max-w-5xl
          rounded-3xl 
          bg-white/10 
          backdrop-blur-xl 
          border border-white/10 
          p-6 sm:p-8 md:p-10 lg:p-12
          shadow-2xl
        "
      >
        {/* Badge */}
        <motion.div
          variants={item}
          className="inline-flex px-4 py-1 rounded-full bg-cyan-500/20 mb-5 sm:mb-6"
        >
          <p className="text-cyan-300 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
            Portfolio • Web Developer
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="
            text-4xl 
            sm:text-5xl 
            md:text-6xl 
            lg:text-7xl
            font-extrabold 
            text-white 
            leading-tight 
            mb-4
          "
        >
          Crafting{" "}
          <span className="text-cyan-400 block sm:inline">
            Modern Experiences
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="
            text-slate-300 
            text-base sm:text-lg md:text-xl
            leading-7 sm:leading-8
            max-w-2xl 
            mb-8 sm:mb-10
          "
        >
          I build elegant web and mobile applications with clean UI, scalable
          architecture, and seamless user experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="
            flex flex-col 
            sm:flex-row 
            gap-4 
            mb-10
          "
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/about"
              className="
                block 
                w-full
                bg-cyan-500 
                rounded-2xl 
                px-6 py-4 
                text-slate-950 
                font-bold 
                text-center 
                shadow-lg 
                shadow-cyan-500/40
              "
            >
              About Me
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/contact"
              className="
                block 
                w-full
                bg-slate-900/60 
                border border-slate-700 
                rounded-2xl 
                px-6 py-4 
                text-white 
                font-semibold 
                text-center 
                hover:border-cyan-400 
                transition
              "
            >
              Contact
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/game"
              className="
                block 
                w-full
                bg-emerald-500 
                rounded-2xl 
                px-6 py-4 
                text-slate-950 
                font-bold 
                text-center 
                shadow-lg 
                shadow-emerald-500/40
              "
            >
              Play Game
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={container}
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-4
          "
        >
          {[
            {
              value: "3+",
              label: "Years Experience",
            },
            {
              value: "20+",
              label: "Projects Built",
            },
            {
              value: "100%",
              label: "Passion for UI/UX",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="
                bg-white/5 
                border border-white/10 
                rounded-2xl 
                p-5 sm:p-6
                backdrop-blur-lg
              "
            >
              <p className="text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </p>

              <p className="text-slate-400 mt-1 text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          variants={item}
          className="
            text-slate-500 
            text-xs sm:text-sm 
            mt-8 
            text-center
          "
        >
          Built with React + TailwindCSS + Framer Motion
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Home;

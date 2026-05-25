import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    inquiryType: "general",
    contactMethods: [],
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleCheckbox(e) {
    const { value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      contactMethods: checked
        ? [...prev.contactMethods, value]
        : prev.contactMethods.filter((m) => m !== value),
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0f172a] relative overflow-hidden px-4 sm:px-6 md:px-8 pt-20 pb-5 sm:pt-20">
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-56 sm:w-80 h-56 sm:h-80 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] w-56 sm:w-80 h-56 sm:h-80 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-5xl mx-auto mt-5">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-8 text-center shadow-2xl"
            >
              <h1 className="text-4xl font-extrabold text-white mb-4">
                Message Sent
              </h1>

              <p className="text-slate-300 text-lg">
                Thanks for reaching out,{" "}
                <span className="text-cyan-400 font-semibold">
                  {formData.name}
                </span>
                !
              </p>
            </motion.div>
          ) : (
            /* 🔥 2 COLUMN WRAPPER STARTS HERE */
            <motion.div
              key="form"
              variants={container}
              initial="hidden"
              animate="show"
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6 md:gap-10
                rounded-3xl
                bg-white/10
                backdrop-blur-xl
                border border-white/10
                p-6 sm:p-8 md:p-10 lg:p-12
                shadow-2xl
              "
            >
              {/* LEFT COLUMN */}
              <div className="flex flex-col justify-center">
                <motion.div variants={item} className="mb-6">
                  <p className="inline-flex px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                    Contact • Let’s Work Together
                  </p>
                </motion.div>

                <motion.h1
                  variants={item}
                  className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4"
                >
                  Get In <span className="text-cyan-400">Touch</span>
                </motion.h1>

                <motion.p
                  variants={item}
                  className="text-slate-300 text-base sm:text-lg leading-7"
                >
                  Have a project idea, collaboration, or job opportunity? Send
                  me a message and let’s build something amazing.
                </motion.p>
              </div>

              {/* RIGHT COLUMN (FORM - unchanged logic/UI) */}
              <motion.form
                variants={container}
                onSubmit={handleSubmit}
                className="space-y-5 sm:space-y-6"
              >
                {/* Name */}
                <motion.div variants={item}>
                  <label className="block text-slate-200 mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/60 border border-slate-700 rounded-2xl px-5 py-4 text-white"
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={item}>
                  <label className="block text-slate-200 mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/60 border border-slate-700 rounded-2xl px-5 py-4 text-white"
                  />
                </motion.div>

                {/* Message */}
                <motion.div variants={item}>
                  <label className="block text-slate-200 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/60 border border-slate-700 rounded-2xl px-5 py-4 text-white resize-none"
                  />
                </motion.div>

                {/* Inquiry Type */}
                <motion.div variants={item}>
                  <label className="block text-slate-200 mb-4 font-medium">
                    Inquiry Type
                  </label>

                  <div className="flex flex-wrap gap-3">
                    {["general", "feedback", "job"].map((type) => (
                      <label
                        key={type}
                        className={`px-4 py-2 rounded-2xl border cursor-pointer ${
                          formData.inquiryType === type
                            ? "bg-cyan-500 text-black"
                            : "bg-white/5 text-slate-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="inquiryType"
                          value={type}
                          checked={formData.inquiryType === type}
                          onChange={handleChange}
                          className="hidden"
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </motion.div>

                {/* Contact Methods */}
                <motion.div variants={item}>
                  <label className="block text-slate-200 mb-4 font-medium">
                    Contact Method
                  </label>

                  <div className="flex gap-3">
                    {["email", "phone"].map((method) => {
                      const active = formData.contactMethods.includes(method);

                      return (
                        <label
                          key={method}
                          className={`px-4 py-2 rounded-2xl border cursor-pointer ${
                            active
                              ? "bg-emerald-500 text-black"
                              : "bg-white/5 text-slate-300"
                          }`}
                        >
                          <input
                            type="checkbox"
                            value={method}
                            checked={active}
                            onChange={handleCheckbox}
                            className="hidden"
                          />
                          {method}
                        </label>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Submit */}
                <motion.button
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full bg-cyan-500 text-black font-bold py-4 rounded-2xl"
                >
                  Send Message
                </motion.button>
              </motion.form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Contact;

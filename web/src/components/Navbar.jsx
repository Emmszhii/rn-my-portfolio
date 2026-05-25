import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Data", path: "/data" },
    { name: "Game", path: "/game" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-2">
      <nav className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl px-6 py-4 shadow-2xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="text-white text-xl md:text-2xl font-extrabold tracking-tight"
            >
              Emmanuel <span className="text-cyan-400">Manalo</span>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-3">
              {links.map((link) => {
                const active = location.pathname === link.path;

                return (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        active
                          ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30"
                          : "text-slate-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white bg-white/10 p-2 rounded-xl border border-white/10 hover:bg-white/20 transition"
            >
              <Menu size={22} />
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden mt-4 border-t border-white/10 pt-4">
              <ul className="flex flex-col gap-2">
                {links.map((link) => {
                  const active = location.pathname === link.path;

                  return (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                          active
                            ? "bg-cyan-500 text-slate-950"
                            : "text-slate-300 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

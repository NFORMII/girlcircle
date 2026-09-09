import { NavLink } from "react-router-dom";
import { MessageCircle, BookOpen, Calendar, Heart, Home, Users, Info, Mail } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/impact", label: "Impact", icon: Users },
  { to: "/learn", label: "Learn", icon: BookOpen },
  { to: "/qa", label: "Q&A", icon: MessageCircle },
  { to: "/tracker", label: "Tracker", icon: Calendar },
  { to: "/get-involved", label: "Get Involved", icon: Heart },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 no-underline">
          <span className="text-2xl">🌸</span>
          <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            GirlCircle
          </span>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium transition-all no-underline ${
                  isActive
                    ? "bg-pink-100 text-pink-600"
                    : "text-gray-500 hover:text-pink-500 hover:bg-pink-50"
                }`
              }
            >
              <Icon size={14} />
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/donate"
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all no-underline ml-1 ${
                isActive
                  ? "bg-pink-600 text-white"
                  : "bg-pink-500 text-white hover:bg-pink-600"
              }`
            }
          >
            <Heart size={14} /> Donate
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <NavLink
            to="/donate"
            className="flex items-center gap-1 bg-pink-500 text-white px-3 py-1.5 rounded-full text-xs font-bold no-underline"
          >
            <Heart size={12} /> Donate
          </NavLink>
        </div>
      </div>

      {/* Mobile bottom nav */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-pink-100 flex justify-around py-1.5 px-1 z-50 safe-area-bottom">
        {navLinks.slice(0, 5).map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-1.5 py-1 rounded-lg text-[10px] no-underline transition-colors ${
                isActive ? "text-pink-600" : "text-gray-400"
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

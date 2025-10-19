import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../public/logo.png";

const menuItems = [
  { label: "Profil", path: "/profile-masjid" },
  { label: "Galeri", path: "/gallery-masjid" },
  { label: "Kontak", path: "/kontak" },
];

export default function BottomBar() {
  return (
    <div className="bg-[#0a0a0a]/95 text-white flex items-center justify-evenly py-2 px-1 fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[85%] sm:w-[60%] md:w-[40%] lg:w-[30%] max-w-3xl z-50 rounded-full shadow-md shadow-black/40">
      {/* Beranda - Logo */}
      <NavLink to="/">
        {({ isActive }) => (
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className={`flex flex-col items-center justify-center leading-none ${
              isActive ? "text-white" : "text-gray-400"
            }`}
          >
            <div className="w-7 h-7 rounded-full overflow-hidden bg-white">
              <img
                src={logo}
                alt="Beranda"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mt-0.5 text-[14px] font-semibold tracking-tight">
              Beranda
            </span>
          </motion.div>
        )}
      </NavLink>

      {/* Menu Teks */}
      {menuItems.map((item, idx) => (
        <NavLink key={idx} to={item.path}>
          {({ isActive }) => (
            <motion.div
              whileHover={{ scale: 1.08, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className={`px-1 sm:px-2 transition-colors leading-none ${
                isActive
                  ? "text-white font-semibold"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              <span className="text-[14px] sm:text-[15px] font-semibold tracking-tight">
                {item.label}
              </span>
            </motion.div>
          )}
        </NavLink>
      ))}
    </div>
  );
}

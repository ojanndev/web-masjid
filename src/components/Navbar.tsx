import React from "react";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 py-4"
      aria-label="Main navigation"
    >
      <div className="flex justify-center items-center">
        <div className="shadow-lg shadow-black/30 rounded-full p-1">
          <img
            src="/logo-darussalam.png"
            alt="Logo Masjid Darussalam"
            className="h-10 w-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
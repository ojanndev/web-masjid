import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    setActivePath(window.location.pathname);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll ketika mobile menu terbuka
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Profil Yayasan', href: '/profile-yayasan' },
    { name: 'Galeri', href: '/gallery-masjid' },
    { name: 'Kontak', href: '/kontak' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
      ? 'bg-emerald-800 py-3 shadow-lg shadow-emerald-900/30'
      : 'py-4 sm:py-6 bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo + Nama Yayasan */}
        <div className="flex items-center space-x-3">
          <div className="bg-white p-1.5 rounded-full shadow-md">
            <img
              src="logo.png"
              alt="Logo Yayasan Masjid Ibnusina"
              className="h-10 sm:h-12 w-auto object-contain"
              loading="lazy"
              sizes="(max-width: 640px) 40px, 48px"
            />
          </div>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {menuItems.map((item, index) => {
            const isActive = activePath === item.href;
            return (
              <li key={index}>
                <a
                  href={item.href}
                  className={`${
                    isScrolled
                      ? 'text-white hover:text-white'
                      : 'text-white hover:text-white'
                  } transition-all duration-500 relative group text-sm lg:text-base ${
                    isActive ? 'font-bold text-white' : 'font-medium'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-500 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'text-white hover:bg-emerald-700/40'
              : 'text-white hover:bg-white/20'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden  backdrop-blur-lg absolute top-full left-0 w-full py-4 shadow-xl shadow-emerald-900/20 transition-all duration-300 ease-in-out"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <ul className="flex flex-col space-y-3">
              {menuItems.map((item, index) => {
                const isActive = activePath === item.href;
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      className={`block py-2 pl-4 border-l-2 transition-colors text-base ${
                        isActive
                          ? 'font-bold text-white border-white'
                          : 'text-white hover:text-white border-transparent hover:border-white'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

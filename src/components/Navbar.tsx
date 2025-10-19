import { useState, useEffect, memo } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = memo(() => {
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
    { name: 'Home', href: '/' },
    { name: 'Tentang', href: '/profile-masjid' },
    { name: 'Berita', href: '/berita' },
    { name: 'Gallery', href: '/gallery-masjid' },
    { name: 'Kontak', href: '/kontak' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white py-3 shadow-md shadow-gray-200'
          : 'py-4 sm:py-6 bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className={`${isScrolled ? 'bg-gray-200' : 'bg-white'} p-1.5 rounded-full shadow-md`}>
            <img
              src="/logo-darussallam.png"
              alt="Logo Masjid Darussalam"
              className="h-10 sm:h-12 w-auto object-contain"
              loading="eager"
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
                  className={`transition-all duration-500 relative group text-sm lg:text-base font-medium ${
                    isScrolled
                      ? isActive
                        ? 'text-gray-900 font-bold'
                        : 'text-gray-700 hover:text-gray-900'
                      : isActive
                      ? 'text-white font-bold'
                      : 'text-white hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-500 ${
                      isScrolled ? 'bg-gray-900' : 'bg-white'
                    } ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
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
              ? 'text-gray-800 hover:bg-gray-200'
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
          className={`md:hidden absolute top-full left-0 w-full py-4 backdrop-blur-lg shadow-xl ${
            isScrolled ? 'bg-white/95' : 'bg-emerald-800/95'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <ul className="flex flex-col space-y-3">
              {menuItems.map((item, index) => {
                const isActive = activePath === item.href;
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      className={`block py-3 pl-4 border-l-2 text-base transition-colors ${
                        isScrolled
                          ? isActive
                            ? 'font-bold text-gray-900 border-gray-900'
                            : 'text-gray-700 hover:text-gray-900 border-transparent hover:border-gray-700'
                          : isActive
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
});

export default Navbar;
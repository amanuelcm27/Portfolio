import { useState, useEffect } from 'react';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [showDropDown, setShowDropDown] = useState(false)
  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    document.body.style.overflow = showDropDown ? 'hidden' : "auto";
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, showDropDown]);

  const renderMenuItems = (isMobile = false) => (
    <ul className={`list-none ${isMobile ? 'flex flex-col m-3' : 'flex'} font-bold`}>
      {menuItems.map((item) => (
        <li
          onClick={() => setShowDropDown(false)}

          key={item.href} className="hover:cursor-pointer hover:bg-black hover:text-white rounded-full p-4">
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="fixed w-full flex flex-col z-10">
      <div
        className={`navbar bg-white text-black w-full h-12 sm:h-20 flex items-center shadow-lg transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'
          }`}
      >
        <span className="text-4xl italic font-extrabold p-6 block sm:hidden">
          <a href="">AF</a>
        </span>
        <span className="text-4xl italic font-extrabold p-12 hidden sm:block">
          <a href="">Amanuel Firew</a>
        </span>
        <div className="hidden sm:block ml-auto p-12">
          {renderMenuItems()}
        </div>
        <div className="ml-auto p-4 text-2xl sm:hidden">
          <i
            onClick={() => setShowDropDown(!showDropDown)}
            className={`fa-solid ${showDropDown ? 'fa-xmark' : 'fa-list'}`}
          ></i>
        </div>
      </div>
      {showDropDown && <div className={`w-full min-h-screen flex text-black bg-light opacity-80 backdrop-blur-md z-20 sm:hidden transition-transform duration-300 ${showDropDown ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}>
        {renderMenuItems(true)}
      </div>}
    </div>
  );
};

export default Navbar;

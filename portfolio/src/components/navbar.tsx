import { useState, useEffect } from 'react';
import "../css/nav.css"
interface NavbarProps {
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navbar: React.FC<NavbarProps> = ({ mode, setMode }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [showDropDown, setShowDropDown] = useState(false)
  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#service' },
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
        <a key={item.href} href={item.href}>
        <li
          onClick={() => setShowDropDown(false)}
          key={item.href} className={`hover:cursor-pointer p-4 ${mode ? ' hover:bg-black hover:text-white' : ' hover:bg-white hover:text-black'}`}>
          {item.label}
        </li>
        </a>
      ))}
      
    </ul>
  );
  return (
    <div className="fixed w-full flex flex-col z-20">
      <div
        className={`navbar ${mode ? 'bg-white text-black' : 'bg-black text-white'} w-full h-12 sm:h-20 flex items-center shadow-lg transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'
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
      <div className='relative'>
        <div className={`absolute  flex  flex-col items-center bg-transparent  right-5 rounded-t-none rounded-full'  transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
          <span className={`cord w-3 h-32 ${mode ? 'bg-white':'bg-black'} rounded-b-lg`}>
          </span>
            <i  onClick={() => setMode(!mode)}  title={`${mode ? 'light mode':"dark mode"}`} className="swinger hover:cursor-pointer fa-solid fa-lightbulb text-4xl bg-none"></i>

        </div>
      </div>
    </div>
  );
};

export default Navbar;

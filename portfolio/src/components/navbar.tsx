import { useState, useEffect } from 'react';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar bg-white text-black z-10 fixed w-full h-20 flex items-center shadow-lg transition-transform duration-300 ${
        showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
       <span className="text-4xl italic font-extrabold p-6 block sm:hidden"><a href="">AF</a></span>
       <span className="text-4xl italic font-extrabold p-12  hidden sm:block"><a href="">Amanuel Firew</a> </span>
      <div className="hidden sm:block ml-auto p-12">
        <ul className="list-none flex font-bold">
          <li className="hover:cursor-pointer hover:underline p-3">Home</li>
          <li className="hover:cursor-pointer hover:underline p-3">About</li>
          <li className="hover:cursor-pointer hover:underline p-3">Projects</li>
          <li className="hover:cursor-pointer hover:underline p-3">Skills</li>
          <li className="hover:cursor-pointer hover:underline p-3">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

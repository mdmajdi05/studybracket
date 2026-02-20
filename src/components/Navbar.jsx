import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { classes } from '../data/coursesData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [mobileClassesOpen, setMobileClassesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-xl sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          {/* <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-primary to-secondary text-white px-3 py-2 rounded-lg font-bold text-lg">
              SB
            </div>
            <div>
              <span className="text-2xl font-bold text-primary block leading-none">StudyBracket</span>
              <span className="text-xs text-secondary font-semibold">CBSE Success</span>
            </div>
          </Link> */}
          <Link to="/" className="flex items-center space-x-2">
            {/* <div className="bg-gradient-to-br from-primary to-secondary text-white px-3 py-2 rounded-lg font-bold text-lg"> */}
            <div className="">
              {/* SB */}


            </div><img className='h-12 w-12' src="/logo.png" alt="StudyBracket Logo" />
            <div>
              <span className="text-2xl font-bold text-black block leading-none">StudyBracket</span>
              <span className="text-xs text-yellow-500 font-semibold">CBSE Success</span>
            </div>
          </Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            <Link to="/" className="text-dark hover:text-primary px-4 py-2 rounded-lg transition duration-300 font-medium hover:bg-light">
              Home
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setDropdown('classes')}
              onMouseLeave={() => setDropdown(null)}
              onClick={() => setDropdown(dropdown === 'classes' ? null : 'classes')} 
            >
              <button className="text-dark hover:text-primary px-4 py-2 rounded-lg transition duration-300 font-medium hover:bg-light flex items-center">
                Classes
                <FaChevronDown className="ml-1 text-xs group-hover:rotate-180 transition" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                <Link to="/classes" className="block px-4 py-3 text-dark hover:text-primary hover:bg-light transition">
                  📚 All Classes
                </Link>


{classes.map(cls => (
  <Link key={cls.id} to={`/class/${cls.id}`} className="block px-4 py-3 text-dark hover:text-primary hover:bg-light transition">
    {cls.name}
  </Link>
))}


                {/* <Link to="/class/9" className="block px-4 py-3 text-dark hover:text-primary hover:bg-light transition">
                  Class 9 (CBSE)
                </Link>
                <Link to="/class/10" className="block px-4 py-3 text-dark hover:text-primary hover:bg-light transition">
                  Class 10 (Board)
                </Link>
                <Link to="/class/11" className="block px-4 py-3 text-dark hover:text-primary hover:bg-light transition">
                  Class 11 (Pre-Board)
                </Link>
                <Link to="/class/12" className="block px-4 py-3 text-dark hover:text-primary hover:bg-light transition">
                  Class 12 (Final)
                </Link> */}
              </div>
            </div>

            <Link to="/courses" className="text-dark hover:text-primary px-4 py-2 rounded-lg transition duration-300 font-medium hover:bg-light">
              Courses
            </Link>
            <Link to="/about" className="text-dark hover:text-primary px-4 py-2 rounded-lg transition duration-300 font-medium hover:bg-light">
              About
            </Link>
            <Link to="/contact" className="text-dark hover:text-primary px-4 py-2 rounded-lg transition duration-300 font-medium hover:bg-light">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-2xl text-dark">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 pb-6 border-t border-gray-200">
            <Link to="/" className="block py-2 px-4 text-dark hover:text-primary hover:bg-light rounded transition" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/classes" className="block py-2 px-4 text-dark hover:text-primary hover:bg-light rounded transition" onClick={toggleMenu}>
              All Classes
            </Link>
            <button
  onClick={() => setMobileClassesOpen(!mobileClassesOpen)}
  className="flex justify-between items-center w-full px-4 py-2 text-gray-700 font-medium hover:text-primary transition"
>
  <span>Select your class</span>
  <FaChevronDown
    className={`transition-transform duration-300 ${
      mobileClassesOpen ? 'rotate-180' : ''
    }`}
  />
</button>
            {/* <Link to="/class/9" className="block py-2 px-4 text-dark hover:text-primary hover:bg-light rounded transition text-sm ml-2" onClick={toggleMenu}>
              + Class 9
            </Link>
            <Link to="/class/10" className="block py-2 px-4 text-dark hover:text-primary hover:bg-light rounded transition text-sm ml-2" onClick={toggleMenu}>
              + Class 10
            </Link>
            <Link to="/class/11" className="block py-2 px-4 text-dark hover:text-primary hover:bg-light rounded transition text-sm ml-2" onClick={toggleMenu}>
              + Class 11
            </Link>
            <Link to="/class/12" className="block py-2 px-4 text-dark hover:text-primary hover:bg-light rounded transition text-sm ml-2" onClick={toggleMenu}>
              + Class 12
            </Link> */}
{mobileClassesOpen && (
  <div className="ml-4 mt-2 space-y-1">
    {classes.map(cls => (
      <Link
        key={cls.id}
        to={`/class/${cls.id}`}
        className="block py-2 px-4 text-dark hover:text-primary hover:bg-light rounded transition text-sm"
        onClick={toggleMenu}
      >
        + {cls.name}
      </Link>
    ))}
  </div>
)}

            <Link to="/courses" className="block py-2 px-4 text-dark hover:text-primary hover:bg-light rounded transition" onClick={toggleMenu}>
              Courses
            </Link>
            <Link to="/about" className="block py-2 px-4 text-dark hover:text-primary hover:bg-light rounded transition" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/contact" className="block py-2 px-4 text-dark hover:text-primary hover:bg-light rounded transition" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
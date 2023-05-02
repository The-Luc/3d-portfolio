import React, { useState } from "react";

import { Link } from "react-router-dom";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/index";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            LucThi &nbsp;
            <span className="sm:block hidden"> | Web Developer</span>
          </p>
        </Link>

        {/*NAV ITEMS*/}
        <ul className="list-none hidden sm:flex gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] cursor-pointer font-medium`}
              onClick={() => setActive(link.title)}
            >
              <Link to={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>

        {/*MOBILE MENU*/}
        <div className="sm:hidden flex left-1 items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          {toggle && (
            <div className="mr-2 p-6 black-gradient rounded-lg absolute top-16 right-0 min-w-[140px] flex flex-col justify-center items-center gap-4">
              <ul className="list-none flex flex-col gap-5">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] cursor-pointer font-medium`}
                    onClick={() => {
                      setToggle(false);
                      setActive(link.title);
                    }}
                  >
                    <Link to={`#${link.id}`}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

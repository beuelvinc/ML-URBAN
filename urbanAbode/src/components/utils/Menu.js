import React, { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar-container">
      <Link
        smooth={true}
        duration={500}
        onClick={() => setOpen(true)}
        className="mobile-menu"
        to="/"
      >
        <Image src="/menu.png" alt="Menu" width={25} height={25} />
      </Link>
      <div className={open ? "menu-opened" : "menu-opened-out"}>
        <Link
          smooth={true}
          duration={500}
          onClick={() => setOpen(false)}
          className="mobile-menu"
          to="/"
        >
          <Image src="/cancel.png" alt="Menu" width={25} height={25} />
        </Link>
        <div className="menu-links-container">
          <Link
            smooth={true}
            duration={500}
            onClick={() => setOpen(false)}
            className="menu-link"
            to="home"
          >
            Home
          </Link>
          <Link
            smooth={true}
            duration={500}
            onClick={() => setOpen(false)}
            className="menu-link"
            to="offers"
          >
            Top offers
          </Link>
          <Link
            smooth={true}
            duration={500}
            onClick={() => setOpen(false)}
            className="menu-link"
            to="about"
          >
            About us
          </Link>
          <Link
            smooth={true}
            duration={500}
            onClick={() => setOpen(false)}
            className="menu-link"
            to="footer"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "../utils/Menu";
import { Link as ScrollLink } from "react-scroll";
import { useMobileDetection } from "@/hooks/useMobile";
import { useRouter } from "next/router";

const Navbar = () => {
  const mobile = useMobileDetection();
  const router = useRouter();

  return (
    <div className="navbar-container">
      <div className="navbar-links">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="My Image"
            width={mobile ? 35 : 60}
            height={mobile ? 25 : 35}
          />
        </Link>
        {router.pathname === "/offers" ? (
          <div className="navbar-items">
            
          </div>
        ) : (
          <div className="navbar-items">
            <ScrollLink
              className="navbar-link"
              to="offers"
              smooth={true}
              duration={500}
            >
              Top offers
            </ScrollLink>
            <ScrollLink
              className="navbar-link"
              to="footer"
              smooth={true}
              duration={500}
            >
              Search in offers
            </ScrollLink>
            <ScrollLink
              className="navbar-link"
              to="footer"
              smooth={true}
              duration={500}
            >
              Our Partners
            </ScrollLink>
            <ScrollLink
              className="navbar-link"
              to="about"
              smooth={true}
              duration={500}
            >
              About us
            </ScrollLink>
          </div>
        )}
      </div>
      <div>
        <ScrollLink
          to="footer"
          className="primary-btn contact-btn"
          smooth={true}
          duration={500}
        >
          Contact us
        </ScrollLink>
        {router.pathname === "/offers" ? null : <Menu />}
      </div>
    </div>
  );
};

export default Navbar;

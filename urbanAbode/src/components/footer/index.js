import React from "react";
import Image from "next/image";
import { useMobileDetection } from "@/hooks/useMobile";

const Footer = () => {
  const mobile = useMobileDetection();

  return (
    <div id="footer" className="footer-section">
      <div className="newsletter">
        <Image
          src="/newsletter.png"
          alt="newsletter"
          width={mobile ? 70 : 150}
          height={mobile ? 70 : 150}
        />
        <div className="newsletter-content">
          <span className="text-secondary newsletter-heading">
            Subscribe to newsletter
          </span>
          <p className="newsletter-text">
            Get the latest news and interesting offers and real estate
          </p>
          <div>
            <input
              className="newsletter-input"
              type="text"
              placeholder="Your e-mail address"
            />
            <button className="secondary-btn">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <Image
          src="/logo-footer.png"
          alt="logo-footer"
          width={120}
          height={63}
        />
        <span className="footer-rights">
          Made By Haider @2023 all rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const NavLinks = () => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const handleDropdownStatus = () => {
    setDropdownStatus(!dropdownStatus);
    console.log(dropdownStatus);
  };
  return (
    <ul className="main-nav__navigation-box">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="cta-one"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Our Clients
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="pricing"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Our Branches
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="team"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Team
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="testimonials-one"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Testimonials
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="faq-one"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          FAQ
        </ScrollLink>
      </li>
    </ul>
  );
};

export default NavLinks;

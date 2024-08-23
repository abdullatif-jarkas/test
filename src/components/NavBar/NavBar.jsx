import "./NavBar.css";
import { useState } from "react";
import NavButton from "../NavButton/NavButton";
import { links } from "../../data/linksData";

const NavBar = () => {
  const [open, setOpen] = useState("nav-trigger");
  const [linksOpen, setLinksOpen] = useState("nav-links");
  const [navBar, setNavBar] = useState(false);
  const [active, setActive] = useState(0);

  const handleClick = () => {
    open === "nav-trigger"
      ? setOpen("nav-trigger active") && setLinksOpen("nav-links active")
      : setOpen("nav-trigger") && setLinksOpen("nav-links");
    open === "nav-trigger"
      ? setLinksOpen("nav-links active")
      : setLinksOpen("nav-links");
  };

  const handleLinkClick = (index) => {
    setActive(index);
  };

  const changePosition = () => {
    if (window.scrollY >= 1) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changePosition);

  return (
    <nav className={navBar ? "active" : ""}>
      <h1 className="logo">VILLA</h1>
      <div className="nav-main-content">
        <ul className={linksOpen}>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <a
                  href={link.to}
                  className={active == index ? 'active' : ''}
                  onClick={() => handleLinkClick(index)}
                >
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
        <NavButton />
      </div>
      <div className={open} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar;

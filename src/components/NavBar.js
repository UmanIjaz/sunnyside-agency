import { useState } from "react";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Navigation Links + Button (Always Visible on Desktop) */}
      <ul className={`nav-menu ${isOpen ? "mobile-menu" : ""}`}>
        <li>About</li>
        <li>Services</li>
        <li>Project</li>
        <li>
          <button className="contact-btn">CONTACT</button>
        </li>
      </ul>

      {/* Hamburger Menu (Visible Only on Mobile) */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
    </nav>
  );
}
export default NavBar;

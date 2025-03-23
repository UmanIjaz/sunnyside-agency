import { useState } from "react";

// import { ReactComponent as Logo } from "./logo.svg";
function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
export default App;

function Header() {
  return (
    <header>
      <Logo />
      <NavBar />
    </header>
  );
}

function Logo() {
  return (
    <img className="logo" src="/assets/images/logo.svg" alt="Brand Logo" />
  );
}

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

function Main() {
  return (
    <main>
      <Hero />
    </main>
  );
}
function Hero() {
  return (
    <section className="hero">
      <span>
        <h1>WE ARE CREATIVES</h1>
        <img src="/assets/images/icon-arrow-down.svg" alt="Scroll Down" />
      </span>
    </section>
  );
}

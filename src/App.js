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
      <Services
        title="Transform your brand"
        align="left"
        link="#"
        imgMobile="/assets/images/mobile/image-transform.jpg"
        imgDesktop="/assets/images/desktop/image-transform.jpg"
        para="We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you."
      />

      <Services
        title="Stand out to the right audience"
        align="right"
        link="#"
        imgMobile="/assets/images/mobile/image-stand-out.jpg"
        imgDesktop="/assets/images/desktop/image-stand-out.jpg"
        para="Using a collaborative formulla of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
      />
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

function Services({ title, para, link, imgMobile, imgDesktop, align }) {
  return (
    <section className={`services ${align === "right" ? "reverse" : ""}`}>
      <article className="services-content service-item">
        <h2>{title}</h2>
        <p>{para}</p>
        <a src={link}>LEARN MORE</a>
      </article>
      <picture className="services-pic service-item">
        <source srcSet={imgMobile} media="(max-width: 768px)" />
        <img src={imgDesktop} alt="Services section picture" />
      </picture>
    </section>
  );
}

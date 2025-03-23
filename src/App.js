import { useState } from "react";
import { testimonialData, galleryImages } from "./data";

// import { ReactComponent as Logo } from "./logo.svg";
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
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

function NavBar({ showBtn = true }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Navigation Links + Button (Always Visible on Desktop) */}
      <ul className={`nav-menu ${isOpen ? "mobile-menu" : ""}`}>
        <li>About</li>
        <li>Services</li>
        <li>Project</li>
        {showBtn && (
          <li>
            <button className="contact-btn">CONTACT</button>
          </li>
        )}
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

      <Features />
      <Testimonials testimonials={testimonialData} />
      <Gallery images={galleryImages} />
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

function Features() {
  return (
    <section className="features">
      <div className="feature-item">
        <picture>
          <source
            srcSet="/assets/images/mobile/image-graphic-design.jpg"
            media="(max-width: 768px)"
          />
          <img
            src="/assets/images/desktop/image-graphic-design.jpg"
            alt="Graphic Design image"
          />
        </picture>
        <div className="feature-content">
          <h3>Graphic Design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </div>
      </div>

      <div className="feature-item">
        <picture>
          <source
            srcSet="/assets/images/mobile/image-photography.jpg"
            media="(max-width: 768px)"
          />
          <img
            src="/assets/images/desktop/image-photography.jpg"
            alt="Photography image"
          />
        </picture>
        <div className="feature-content">
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ mobileSrc, desktopSrc, alt }) {
  return (
    <picture>
      <source srcSet={mobileSrc} media="(max-width: 768px)" />
      <img src={desktopSrc} alt={alt} />
    </picture>
  );
}

function Gallery({ images }) {
  return (
    <section className="gallery">
      {images.map((image, index) => (
        <GalleryItem key={index} {...image} />
      ))}
    </section>
  );
}

function TestimonialItem({ image, text, name, role }) {
  return (
    <article className="testimonial-item">
      <img src={image} alt={`${name}'s profile`} />
      <p>{text}</p>
      <div className="testimonial-author">
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
    </article>
  );
}

function Testimonials({ testimonials }) {
  return (
    <section className="testimonials">
      <h3>Client Testimonials</h3>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <TestimonialItem key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <svg width="124" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.857 18.708c1.638 0 2.995-.36 4.07-1.08 1.075-.721 1.613-1.769 1.613-3.144-.083-1.855-1.464-3.246-4.144-4.173l-1.44-.597c-.314-.1-.538-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.182.347 1.513 1.043l3.698-1.044c-.893-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193C1.15 7.08.645 8.116.645 9.39c0 .398.058.766.174 1.106.116.34.29.638.521.894.232.257.455.48.67.671.215.19.488.369.82.534.33.166.582.286.756.36.174.075.41.162.707.261l.422.15 1.49.546c.363.133.6.244.707.335a.449.449 0 01.16.36c0 .431-.404.647-1.215.647-1.191 0-1.903-.53-2.134-1.59L0 14.509c.463 2.8 2.416 4.2 5.857 4.2zm11.636 0c1.638 0 2.845-.63 3.623-1.888v1.615h5.112V5.366h-5.112v7.156c0 1.474-.505 2.21-1.514 2.21-1.026 0-1.539-.736-1.539-2.21V5.366h-5.112v7.653c0 3.793 1.514 5.69 4.542 5.69zm16.103-.273V11.28c0-1.475.504-2.212 1.513-2.212 1.026 0 1.54.737 1.54 2.212v7.155h5.111v-7.652c0-3.793-1.513-5.69-4.541-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zm15.383 0V11.28c0-1.475.504-2.212 1.514-2.212 1.025 0 1.538.737 1.538 2.212v7.155h5.113v-7.652c0-3.793-1.514-5.69-4.542-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zM64.958 24l8.289-18.634H67.91l-2.532 6.684-2.258-6.684h-5.584l5.435 11.802L59.944 24h5.014zm13.67-5.292c1.638 0 2.995-.36 4.07-1.08 1.076-.721 1.614-1.769 1.614-3.144-.083-1.855-1.465-3.246-4.145-4.173l-1.44-.597c-.314-.1-.537-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.183.347 1.514 1.043l3.698-1.044c-.894-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193-1.01.795-1.514 1.83-1.514 3.105 0 .398.058.766.173 1.106.116.34.29.638.522.894.231.257.455.48.67.671.215.19.488.369.819.534.33.166.583.286.757.36.173.075.41.162.707.261l.422.15 1.489.546c.364.133.6.244.707.335a.449.449 0 01.161.36c0 .431-.405.647-1.216.647-1.19 0-1.902-.53-2.134-1.59l-3.723.844c.464 2.8 2.416 4.2 5.857 4.2zm9.8-14.137c.91 0 1.613-.215 2.11-.646.495-.43.744-.977.744-1.64 0-.678-.24-1.23-.72-1.651C90.082.21 89.371 0 88.428 0c-.943 0-1.655.211-2.135.634-.48.422-.72.973-.72 1.652 0 .662.249 1.209.745 1.64.497.43 1.2.645 2.11.645zm2.556 13.864V5.366H85.87v13.069h5.113zm7.74.273c1.737 0 2.977-.63 3.722-1.888v1.615h5.112V.472h-5.112v6.534c-.745-1.275-1.985-1.913-3.723-1.913-1.753 0-3.214.642-4.38 1.926-1.166 1.283-1.75 2.91-1.75 4.882 0 1.97.584 3.598 1.75 4.882 1.166 1.283 2.627 1.925 4.38 1.925zm1.39-3.9c-.729 0-1.312-.274-1.75-.82-.439-.547-.658-1.243-.658-2.087 0-.845.215-1.54.645-2.087.447-.547 1.034-.82 1.762-.82s1.311.273 1.75.82c.438.546.657 1.242.657 2.087 0 .844-.219 1.54-.657 2.087-.439.546-1.022.82-1.75.82zm16.698 3.9c2.597 0 4.624-.754 6.08-2.26l-2.11-2.833c-1.042.845-2.217 1.267-3.524 1.267-.992 0-1.799-.224-2.42-.67-.62-.448-.93-.879-.93-1.293h9.604c.083-.298.124-.687.124-1.167 0-2.054-.674-3.677-2.022-4.87-1.349-1.193-3.073-1.789-5.175-1.789-2.25 0-4.028.671-5.335 2.013-1.307 1.341-1.961 2.956-1.961 4.844 0 1.938.69 3.549 2.072 4.833 1.382 1.283 3.247 1.925 5.597 1.925zm2.208-8.149h-5.112c.033-.613.298-1.08.794-1.404.496-.323 1.084-.484 1.762-.484.678 0 1.266.165 1.762.497.497.331.761.795.794 1.391z"
          fill="#2c7566"
          fill-rule="nonzero"
        />
      </svg>
      <NavBar showBtn={false} />
      <SocialLinks />
    </footer>
  );
}

function SocialLinks() {
  return (
    <div className="social-links">
      <img src="/assets/images/icon-facebook.svg" alt="facebook icon" />
      <img src="/assets/images/icon-instagram.svg" alt="instagram icon" />
      <img src="/assets/images/icon-pinterest.svg" alt="pinterest icon" />
      <img src="/assets/images/icon-twitter.svg" alt="twitter icon" />
    </div>
  );
}

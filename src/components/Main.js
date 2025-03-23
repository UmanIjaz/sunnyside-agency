import { Hero, Services, Features, Testimonials, Gallery } from "./index";
import { useRef } from "react";
function Main() {
  const nextSectionScrollRef = useRef(null);
  return (
    <main>
      <Hero nextSectionScrollRef={nextSectionScrollRef} />
      <Services
        ref={nextSectionScrollRef}
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
      <Testimonials />
      <Gallery />
    </main>
  );
}

export default Main;

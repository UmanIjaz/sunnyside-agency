function Hero({ nextSectionScrollRef }) {
  const scrollToNextSection = () => {
    console.log("red");

    if (nextSectionScrollRef.current) {
      nextSectionScrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="hero">
      <span>
        <h1>WE ARE CREATIVES</h1>
        <img
          src="/assets/images/icon-arrow-down.svg"
          alt="Scroll Down"
          onClick={scrollToNextSection}
        />
      </span>
    </section>
  );
}
export default Hero;

function Services({ title, para, link, imgMobile, imgDesktop, align, ref }) {
  return (
    <section
      ref={ref}
      className={`services ${align === "right" ? "reverse" : ""}`}
    >
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
export default Services;

function Features() {
  return (
    <section className="features">
      <div className="feature-item">
        <picture>
          <source
            srcSet="/assets/images/mobile/image-graphic-design.jpg"
            media="(max-width: 768px)"
          />
          <img src="/assets/images/desktop/image-graphic-design.jpg" alt="" />
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
          <img src="/assets/images/desktop/image-photography.jpg" alt="" />
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
export default Features;

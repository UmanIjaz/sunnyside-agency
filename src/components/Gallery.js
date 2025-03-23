import { galleryImages } from "../data";
function GalleryItem({ mobileSrc, desktopSrc, alt }) {
  return (
    <picture>
      <source srcSet={mobileSrc} media="(max-width: 768px)" />
      <img src={desktopSrc} alt={alt} />
    </picture>
  );
}

function Gallery() {
  return (
    <section className="gallery">
      {galleryImages.map((image, index) => (
        <GalleryItem key={index} {...image} />
      ))}
    </section>
  );
}

export default Gallery;

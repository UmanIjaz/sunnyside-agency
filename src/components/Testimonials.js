import { testimonialData } from "../data";
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

function Testimonials() {
  return (
    <section className="testimonials">
      <h3>Client Testimonials</h3>
      <div className="testimonials-list">
        {testimonialData.map((testimonial, index) => (
          <TestimonialItem key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
export default Testimonials;

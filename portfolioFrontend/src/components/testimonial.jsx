import React, { useState, useEffect } from "react";

import "../styles/Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Client Neme",
    role: "Product Designer",
    image: "https://i.pravatar.cc/150?img=47",
    quote:
      "Kamaludduin delivered a clean, functional, and scalable solution that matched our exact needs.",
    rating: 5,
  },
  {
    id: 2,
    name: "Client Name",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=12",
    quote:
      "He  transformed our ideas into a smooth user-friendly platform that exceeded expectation.",
    rating: 4,
  },
  {
    id: 3,
    name: "Client Name",
    role: "Marketing Lead",
    image: "https://i.pravatar.cc/150?img=22",
    quote:
      "Great communication and attention to detail -our project was completed on time and stress free.",
    rating: 5,
  },
  {
    id: 4,
    name: "Client Name",
    role: "CEO, Startup Inc.",
    image: "https://i.pravatar.cc/150?img=32",
    quote:
      "Kamaluddin build a responsive, secure, and modern application that our user love.",
    rating: 5,
  },
  {
    id: 5,
    name: "Client Name",
    role: "UX Specialist",
    image: "https://i.pravatar.cc/150?img=22",
    quote:
      "Kamaluddin is reliable, professional , and always delivers high-quality codes.",
    rating: 4,
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 835);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 835);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const visible = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ];

  return (
    <section id="testimonial" className="testimonials">
      <h1 className="skills_heading">What People Say</h1>
      <hr />
      <div className="carousel">
        {!isMobile && (
          <button className="nav left" onClick={prevSlide}>
            ❮
          </button>
        )}

        <div className="cards-wrapper fadeUp testimonial-wrapper">
          {(isMobile ? testimonials : visible).map((t) => (
            <div key={t.id} className="testimonial-card animate">
              <div className="profile">
                <img src={t.image} alt={t.name} />
                <div>
                  <h3>
                    {t.id} {t.name}
                  </h3>
                  <p>client role</p>
                  <div className="stars">
                    {"★".repeat(t.rating)}
                    {"☆".repeat(5 - t.rating)}
                  </div>
                </div>
              </div>
              <p className="quote">“{t.quote}”</p>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                Expected feedback from future client
              </p>
            </div>
          ))}
        </div>

        {!isMobile && (
          <button className="nav right" onClick={nextSlide}>
            ❯
          </button>
        )}
      </div>
    </section>
  );
}

export default Testimonials;

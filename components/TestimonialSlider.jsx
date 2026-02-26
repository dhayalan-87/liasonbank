"use client";

import { useEffect, useRef, useState } from "react";
import {testimonials} from "@/static/testimonialList";

export default function TestimonialSlider() {
  const ITEMS_PER_VIEW = 2; // ✅ show two
  const totalSlides = Math.ceil(testimonials.length / ITEMS_PER_VIEW);

  const [curSlide, setCurSlide] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const startAutoplay = () => {
    intervalRef.current = setInterval(nextSlide, 4000);
  };

  const stopAutoplay = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  return (
    <div
      className="slider"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      {testimonials.map((item, i) => (
        <div
          key={i}
          className="slide"
          style={{
            width: "50%", // ✅ half width
            transform: `translateX(${100 * (i - curSlide * ITEMS_PER_VIEW)}%)`,
          }}
        >
          <div className="testimonial">
            <h5 className="header">{item.title}</h5>
            <p className="text">{item.text}</p>

            <div className="author">
              <img src={item.image} alt={item.name} />

              <div className="author-info">
                <h6>{item.name}</h6>
                <p>{item.location}</p>

                <div className="rating">
                  {[...Array(5)].map((_, j) => (
                    <span
                      key={j}
                      className={`star ${
                        j + 1 <= Math.round(item.rating) ? "filled" : ""
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Arrows (desktop only via CSS) */}
      <button className="btn left" onClick={prevSlide}>
        ←
      </button>
      <button className="btn right" onClick={nextSlide}>
        →
      </button>

      {/* Dots (mobile only via CSS) */}
      <div className="dots">
        {[...Array(totalSlides)].map((_, i) => (
          <button
            key={i}
            className={`dot ${curSlide === i ? "active" : ""}`}
            onClick={() => setCurSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}
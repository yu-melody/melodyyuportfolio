"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Slide {
  type: "image" | "video";
  src: string;
  caption?: string;
}

interface ImageSliderProps {
  images: Slide[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Enable left/right arrows
  };

  return (
    <div style={{ width: "100%", margin: "0 auto", paddingBottom: "2rem" }}> {/* Center the slider */}
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} style={{ position: "relative", textAlign: "center" }}>
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.caption || `Slide ${index + 1}`}
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "contain", // Adjust image fit
                  borderRadius: "10px", // Optional: add rounded corners
                }}
              />
            ) : (
              <video
                controls
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {item.caption && (
              <p
                style={{
                  marginTop: "10px",
                  color: "#555", // Subtle text color
                  fontSize: "14px", // Adjust font size
                  textAlign: "center", // Ensure text is centered
                  fontFamily: "Arial, sans-serif", // Optional: add a clean font
                }}
              >
                {item.caption}
              </p>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;

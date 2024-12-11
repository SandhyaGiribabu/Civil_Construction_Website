import React, { useState } from "react";

// Sample Images
import img1 from "./assets/home.jpg";
import img2 from "./assets/fence.jpg";
import img3 from "./assets/shed.jpg";

const Services = () => {
  const carouselItems = [
    {
      image: img1,
      title: "Building construction",
      description: "Thiruporur,Chengalpatu.",
      icon: "fas fa-flask", // Font Awesome icon
    },
    {
      image: img2,
      title: "Fencing works",
      description: "Pudupakam,Chennai.",
      icon: "fas fa-drafting-compass",
    },
    {
      image: img3,
      title: "Shed work",
      description: "Amrutanjan,Chennai",
      icon: "fas fa-building",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ backgroundColor: "#111", color: "white", padding: "40px 20px", position: "relative" }}>
      {/* Navigation Buttons */}
      <div style={{ position: "absolute", top: "50px", left: "1000px", zIndex: 10 }}>
        <button
          onClick={goToPrevious}
          style={{
            backgroundColor: "#ff4500",
            color: "white",
            border: "none",
            padding: "10px 20px",
            marginRight: "10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Previous
        </button>
        <button
          onClick={goToNext}
          style={{
            backgroundColor: "#ff4500",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Next
        </button>
      </div>

      <h5 style={{ color: "#ff4500" }}>SOME OF OUR WORKS</h5>
      <h2>Providing Solutions Of Every Kind</h2>

      <div className="row align-items-center" style={{ marginTop: "20px" }}>
        <div className="col-md-4">
          <img
            src={carouselItems[currentIndex].image}
            alt={carouselItems[currentIndex].title}
            style={{
              width: "600px",
              height: "500px",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className="col-md-8">
          <div
            style={{
              marginLeft:"200px",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h4>
              <i
              ></i >
              <p style={{ color: "#000" }}>{carouselItems[currentIndex].title}</p>
            </h4>
            <p style={{ color: "#000" }}>{carouselItems[currentIndex].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
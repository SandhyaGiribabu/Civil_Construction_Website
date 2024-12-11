import React from "react";
import img from "./assets/photo.jpg";

const Aboutprop = () => {
  const image = img;
  const name = "Giribabu S";
  const description =
    "Giribabu is a dedicated proprietor with years of experience in the industry. He is passionate about delivering quality and ensuring customer satisfaction.";

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, black,orange)",
        padding: "20px",
        color: "white",
      }}
    >
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left Section: Proprietor Image */}
          <div className="col-md-4">
            <img
              src={image}
              alt={name}
              style={{
                width: "100%",
                maxWidth: "450px",
                borderRadius: "10%",
              }}
            />
          </div>

          {/* Right Section: Name and Description */}
          <div className="col-md-8">
            <h2
              style={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              {name}
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.6",
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutprop;

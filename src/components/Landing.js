import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png"; // Replace with your logo path
import workerImage from "./assets/worker.png"; // Replace with worker image path
import bgImage from "./assets/bg.png"; // Replace with background image path
import Aboutus from "./Aboutus.js"; // Import the Aboutus component
import Services from "./Services"; // Import the Services component
import Contact from "./Contact"; // Import the Contact component
import Footer from "./Footer"; // Import the Footer component

function Landing() {
  const menuItems = [
    { name: "Home", path: "#" },
    { name: "About Us", path: "#Aboutus" },
    { name: "Services", path: "#Services" },
    { name: "Contact Us", path: "#Contactus" },
    { name: "Projects", path: "/projects" }, // Link to the Projects page
  ];

  const scrollToSection = (id) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="container-fluid">
      {/* Include Bootstrap */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <style>
        {`
          .nav-link {
            transition: all 0.3s ease;
            border-radius: 25px;
            padding: 8px 15px; /* Add padding to increase the clickable area */
            display: inline-block; /* Ensure proper sizing around the text */
            text-align: center; /* Keep the text centered */
          }
          .nav-link:hover {
            color: black !important;
            background-color: orange;
          }
          .btn-warning {
            background-color: orange;
            border-color: orange;
            transition: all 0.3s ease;
          }
          .btn-warning:hover {
            background-color: darkorange;
            border-color: darkorange;
          }
          .nav-item {
            margin-right: 20px; /* Maintain spacing between menu items */
          }
        `}
      </style>

      {/* Fixed Header */}
      <header className="d-flex justify-content-between align-items-center py-3 border-bottom fixed-top bg-white">
        <div className="d-flex align-items-center">
          <img
            src={logo}
            alt="Konstic Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            SRI SANDHYA ENGINEERING
          </span>
        </div>
        <nav>
          <ul className="nav">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                {item.path.startsWith("#") ? (
                  <a
                    className="nav-link text-dark"
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.path);
                    }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link className="nav-link text-dark" to={item.path}>
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <button className="btn btn-warning" aria-label="Get a quote">
          Get a Quote
        </button>
      </header>

      {/* Main Section */}
      <main
        className="row align-items-center text-white position-relative"
        style={{
          minHeight: "100vh",
          marginTop: "80px",
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url(${bgImage}) center/cover no-repeat`,
          backdropFilter: "blur(5px)",
        }}
      >
        {/* Left Section */}
        <div className="col-md-6 p-5">
          <h2 className="fw-light">Great Experience in Building</h2>
          <h1 className="fw-bold">We Build For A Better Future</h1>
          <p className="my-4">
            Sri Sandhya Engineering is a civil works company which aims to
            provide quality services to people since 2005.
          </p>
          <button
            className="btn btn-warning btn-lg"
            aria-label="Let's get started"
          >
            Let’s Get Started
          </button>
        </div>
      </main>

      {/* About Us Section */}
      <section id="Aboutus" className="py-5">
        <Aboutus />
      </section>

      {/* Services Section */}
      <section id="Services" className="py-5">
        <Services />
      </section>

      {/* Contact Section */}
      <section id="Contactus" className="py-5">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default Landing;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png"; // Replace with your logo path
import L28 from './assets/LatestProjects/28.jpg';  
import L29 from './assets/LatestProjects/29.jpg'; 
import L30 from './assets/LatestProjects/30.jpg'; 
import L31 from './assets/LatestProjects/31.jpg'; 
import L32 from './assets/LatestProjects/32.jpg'; 
import L33 from './assets/LatestProjects/33.jpg'; 
import L34 from './assets/LatestProjects/34.jpg'; 
import L35 from './assets/LatestProjects/35.jpg'; 
import L36 from './assets/LatestProjects/36.jpg'; 
import L37 from './assets/LatestProjects/37.jpg'; 
import L38 from './assets/LatestProjects/38.jpg'; 
import L39 from './assets/LatestProjects/39.jpg'; 
import L40 from './assets/LatestProjects/40.jpg'; 
import L41 from './assets/LatestProjects/41.jpg'; 
import L42 from './assets/LatestProjects/42.jpg'; 
import L44 from './assets/LatestProjects/44.jpg'; 
import L45 from './assets/LatestProjects/45.jpg'; 
import L46 from './assets/LatestProjects/46.jpg'; 
import L1 from './assets/LatestProjects/L1.jpg'; 
import L2 from './assets/LatestProjects/L2.jpg'; 
import L3 from './assets/LatestProjects/L3.jpg'; 
import L4 from './assets/LatestProjects/L4.jpg'; 
import L5 from './assets/LatestProjects/L5.jpg'; 
import L6 from './assets/LatestProjects/L6.jpg'; 
import L7 from './assets/LatestProjects/L7.jpg'; 
import L8 from './assets/LatestProjects/L8.jpg'; 
import L9 from './assets/LatestProjects/L9.jpg'; 
import L10 from './assets/LatestProjects/L10.jpg'; 
import L11 from './assets/LatestProjects/L11.jpg'; 
import L12 from './assets/LatestProjects/L12.jpg'; 
import L13 from './assets/LatestProjects/L13.jpg'; 
import L14 from './assets/LatestProjects/L14.jpg'; 
import L15 from './assets/LatestProjects/L15.jpg'; 
import L16 from './assets/LatestProjects/L16.jpg'; 
import L17 from './assets/LatestProjects/L17.jpg'; 
import L18 from './assets/LatestProjects/L18.jpg'; 
import L19 from './assets/LatestProjects/L19.jpg'; 
import L20 from './assets/LatestProjects/L20.jpg'; 
import L21 from './assets/LatestProjects/L21.jpg'; 
import L22 from './assets/LatestProjects/L22.jpg'; 
import L23 from './assets/LatestProjects/L23.jpg'; 
import L24 from './assets/LatestProjects/L24.jpg'; 
import L25 from './assets/LatestProjects/L25.jpg'; 
import L26 from './assets/LatestProjects/L26.jpg'; 
import P1 from './assets/PastProjects/P1.jpg'; 
import P2 from './assets/PastProjects/P2.jpg'; 
import P3 from './assets/PastProjects/P3.jpg'; 
import P4 from './assets/PastProjects/P4.jpg'; 
import P5 from './assets/PastProjects/P5.jpg'; 
import P6 from './assets/PastProjects/P6.jpg'; 
import P7 from './assets/PastProjects/P7.jpg'; 
import P8 from './assets/PastProjects/P8.jpg'; 
import P9 from './assets/PastProjects/P9.jpg'; 
import P10 from './assets/PastProjects/P10.jpg'; 
import P11 from './assets/PastProjects/P11.jpg'; 
import P12 from './assets/PastProjects/P12.jpg'; 
import P13 from './assets/PastProjects/P13.jpg'; 
import P14 from './assets/PastProjects/P14.jpg'; 
import P15 from './assets/PastProjects/P15.jpg'; 
import P16 from './assets/PastProjects/P16.jpg'; 
import P17 from './assets/PastProjects/P17.jpg'; 
// Array of images for latest projects
const latestProjectImages = [L17, L28, L29, L30, L31, L32, L33, L34, L35, L36, L37, L38, L39, L40, L41, L42, L44, L45, L46, L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11, L12, L13, L14, L15, L16, L17, L18, L19, L20, L21, L22, L23, L24, L25, L26];


const pastProjects = [
  {
    title: "Residential Complex",
    date: "January 2022",
    image: P1,
  },
  {
    title: "Shopping Mall",
    date: "March 2022",
    image: P2,
  },
  {
    title: "Shopping Mall",
    date: "March 2022",
    image: P3,
  },
  {
    title: "Shopping Mall",
    date: "March 2022",
    image: P4,
  },
  {
    title: "Shopping Mall",
    date: "March 2022",
    image: P5,
  },
  {
    title: "Shopping Mall",
    date: "March 2022",
    image: P6,
  },
 
  {
    title: "Shopping Mall",
    date: "March 2022",
    image: P7,
  },
  {
    title: "Shopping Mall",
    date: "March 2022",
    image: P8,
  },
  {
    title: "Shopping Mall",
    date: "March 2022",
    image: P9,
  },
  {
    title: "Shopping Mall",
    date: "March 2022",
    image: P10,
  },
  {
    title: "Shopping Mall",
    date: "March 2022",
    image: P11,
  },
  {
    title: "Shopping Mall",
    date: "March 2022",
    image: P12,
  },
  {
    title: "Shopping Mall",
    date: "March 2022",
    image: P13,
  },
  {
    title: "Shopping Mall",
    date: "March 2022",
    image: P14,
  },
  {
    title: "Shopping Mall",
    date: "March 2022",
    image: P15,
  },{
    title: "Shopping Mall",
    date: "March 2022",
    image: P16,
  },
  {
    title: "Shopping Mall",
    date: "March 2022",
    image: P17,
  }
];

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0); // Track current slide index

  // Handle next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % latestProjectImages.length);
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? latestProjectImages.length - 1 : prev - 1
    );
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/#Aboutus" },
    { name: "Services", path: "/#Services" },
    { name: "Contact Us", path: "/#Contactus" },
    { name: "Projects", path: "/projects" }, // Active page
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
            padding: 8px 15px;
            display: inline-block;
            text-align: center;
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
            margin-right: 20px;
          }
          .fixed-top {
            background-color: white !important;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow for navbar */
          }
        `}
      </style>

      {/* Navbar */}
      <header className="d-flex justify-content-between align-items-center py-3 border-bottom fixed-top">
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
                  <Link
                    className={`nav-link text-dark ${
                      item.name === "Projects" ? "active" : ""
                    }`}
                    to={item.path}
                  >
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

      {/* Projects Section */}
      <main style={{ marginTop: "80px" }}>
        <div className="container py-5">
          {/* Title */}
          

          {/* Latest Projects */}
          <section className="mb-5">
            <h2 className="text-center mb-4" style={{ fontWeight: "bold", fontSize: "2rem" }}>
              Latest Projects
            </h2>

            {/* Carousel */}
            <div className="position-relative">
              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="btn btn-light position-absolute start-0"
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    zIndex: 10,
                  }}
                  onClick={prevSlide}
                >
                  &#8249; {/* Left Arrow */}
                </button>

                <div className="row w-100">
                  {latestProjectImages
                    .slice(currentSlide, currentSlide + 3)
                    .map((image, index) => (
                      <div key={index} className="col-md-4 mb-4">
                        <div className="card shadow">
                          <img
                            src={image}
                            alt="Latest Project"
                            className="card-img-top rounded"
                            style={{ height: "400px", objectFit: "cover" }}
                          />
                        </div>
                      </div>
                    ))}
                </div>

                <button
                  className="btn btn-light position-absolute end-0"
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    zIndex: 10,
                  }}
                  onClick={nextSlide}
                >
                  &#8250; {/* Right Arrow */}
                </button>
              </div>
            </div>
          </section>

          {/* Past Projects */}
          <section>
            <h2 className="text-center mb-4" style={{ fontWeight: "bold", fontSize: "2rem" }}>
              Past Projects
            </h2>
            <div className="row">
              {pastProjects.map((project, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <div className="card shadow">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="card-img-top rounded"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title" style={{ fontWeight: "bold" }}>
                        {project.title}
                      </h5>
                      <p className="text-muted">{project.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Projects;

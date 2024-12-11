import React from "react";
import workerImage1 from "./assets/image.png"; // Replace with the path to the first image
import workerImage2 from "./assets/worker.png"; // Replace with the path to the second image

function Aboutus() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Section: Images */}
        <div className="col-md-6">
          <div className="row g-2">
            <div className="col-12">
              <img
                src={workerImage1}
                alt="Workers"
                className="img-fluid rounded"
                style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", width: "400px" }}
              />
            </div>
          </div>
        </div>

        {/* Right Section: Content */}
        <div className="col-md-6">
          <div className="text-start">
            <h6 className="text-uppercase text-warning fw-bold" style={{ color: '#964c1e' }}>
              <span role="img" aria-label="Hammer">
                🔨
              </span>{" "}
              About Our Company
            </h6>

            <h2 className="fw-bold">
              We Provide Cost Effective Solution For You
            </h2>
            <p className="text-muted">
              At Sri Sandhya Engineering we focus on providing the best solution at competitive price.
            </p>
          </div>
          <div className="mt-4">
            {/* Worldwide Services */}
            <div className="d-flex align-items-start mb-3">
              <div
                className="rounded-circle bg-warning d-flex align-items-center justify-content-center me-3"
                style={{ width: "60px", height: "50px" }}
              >
                <i className="fas fa-globe text-white fs-4"></i>
              </div>
              <div>
                <h5 className="mb-1">Skilled workforce</h5>
                <p className="text-muted">
                  Our workers are talented and provide quality service on time.
                </p>
              </div>
            </div>
            {/* Best Company Award Winner */}
            <div className="d-flex align-items-start">
              <div
                className="rounded-circle bg-warning d-flex align-items-center justify-content-center me-3"
                style={{ width: "90px", height: "50px" }}
              >
                <i className="fas fa-trophy text-white fs-4"></i>
              </div>
              <div>
                <h5 className="mb-1">Customers Satisfaction</h5>
                <p className="text-muted">
                  With over 19 years of expertise in this field, we have built a strong relationship with our customers.
                </p>
              </div>
            </div>
          </div>
          {/* Read More Button */}
          <div className="mt-4">
            <button className="btn btn-warning btn-lg">
              Read More <i className="fas fa-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;

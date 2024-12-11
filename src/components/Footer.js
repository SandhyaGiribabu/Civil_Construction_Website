import React from 'react';
import bgImage from './assets/bg.png'; // Replace with your background image path
import logo from './assets/logo.png'; // Replace with your logo image path

const Footer = () => {
  const gradientStyle = {
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${bgImage}) center/cover no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '50px 20px',
  };

  const whiteBoxStyle = {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    marginBottom: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const iconStyle = {
    fontSize: '20px',
    color: 'white',
    marginRight: '10px',
  };

  return (
    <footer style={gradientStyle}>
      <div className="container">
        {/* White Box Element */}
        <div style={whiteBoxStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
  <img 
    src={logo} 
    alt="SRI SANDHYA ENGINEERING" 
    style={{ maxWidth: '100px' }} 
  />
  <p style={{ margin: 0, fontWeight: 'bold', color: 'black' }}>
    SRI SANDHYA ENGINEERING
  </p>
</div>

          <div>
            <p><strong>Office Location</strong></p>
            <p>Thiruporur, Chengalpattu</p>
          </div>
          <div>
            <p>
              <strong>Send Email:</strong>{' '}
              <a href="mailto:sandhyagiribabu80@gmail.com" style={{ color: 'black' }}>
                sandhyagiribabu80@gmail.com
              </a>
            </p>
            <p><strong>Phone:</strong> +91 98409 49794</p>
          </div>
        </div>

        {/* Footer Content */}
        <div className="row">
          <div className="col-md-4">
            <h5>About Company</h5>
            <p>Civil construction company providing quality services at the cheapest prices.</p>
            <div>
              <a href="#" style={iconStyle}>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" style={iconStyle}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" style={iconStyle}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" style={iconStyle}>
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="./Aboutus" style={{ color: 'white' }}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: 'white' }}>
                    Blogs & News
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: 'white' }}>
                    Our Pricing
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: 'white' }}>
                    Our FAQ's
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: 'white' }}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <h5>Our Services</h5>
              <ul className="list-unstyled">
                <li>Building Construction</li>
                <li>Architecture Design</li>
                <li>Building Renovation</li>
                <li>Smart Technology</li>
                <li>Chemical Research</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

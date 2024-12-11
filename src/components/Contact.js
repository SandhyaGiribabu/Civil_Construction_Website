import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ih51xtx", // Replace with your EmailJS service ID
        "template_187safa", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          to_name: "Sandhya", // Replace with your name
          message: formData.message,
          reply_to: formData.email,
        },
        "Zb__E9fF9RtmLMTLu" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send the message. Please try again later.");
        }
      );

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 p-4" style={{ backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <h2 className="mb-4">Get In Touch!</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control mb-3"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control mb-3"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phone"
                className="form-control mb-3"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control mb-3"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-control mb-3"
                placeholder="Write Message..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              style={{ backgroundColor: "#ff5722", border: "none", fontWeight: "bold" }}
            >
              SEND MESSAGE →
            </button>
          </form>
        </div>
        <div className="col-md-6 text-white text-center p-5" style={{ backgroundColor: "#343a40", borderRadius: "8px" }}>
          <h3 className="mb-4">TALK TO US</h3>
          <h4 className="mb-3">Building With Passion</h4>
          <h4 className="mb-4">Ensuring Satisfactions</h4>
          <p className="mb-4">
            Let us help you build your dream with our 19+ years experience in this field.
          </p>
          <h5 className="mb-2">Phone: Giribabu S</h5>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>+91 98409 49794</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
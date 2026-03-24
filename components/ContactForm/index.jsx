"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    // TODO: API call here

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form id="contact" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="name" className="d-none">Your name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Your name"
          title="Your name"
          value={formData.name}
          onChange={handleChange}
        />
        <span>Your name</span>
      </div>

      <div className="form-group">
         <label htmlFor="email" className="d-none">Your e-mail</label>
        <input type="text" name="email" id="email" required="" placeholder="Your e-mail" title="Your e-mail" />
        {/* <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Your e-mail"
          title="Your e-mail"
          value={formData.email}
          onChange={handleChange}
        /> */}
        <span>Your e-mail</span>
      </div>

      <div className="form-group">
        <label htmlFor="subject" className="d-none">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          placeholder="Subject"
          title="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <span>Subject</span>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="d-none">Your message</label>
        <textarea
          name="message"
          id="message"
          required
          placeholder="Your message"
          title="Your message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <span>Your message</span>
      </div>

      <div className="form-group">
        <button id="submit" type="submit" name="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
import React, { useState } from 'react';
import './Contact.css';
import EmailContact from '../EmailContact/EmailContact';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    description: '',
    product: 'babydiper',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="form-container">
      <h1>Contact Us</h1>
      <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
        <input type="hidden" name="access_key" value="ef10fcd1-75ce-48f2-b37d-944e6226d048" />
        
        <div className="input-group">
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Enter your contact number"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Provide details or your query"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product">Select Product</label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          >
            <option value="babydiper">Baby Diper</option>
            <option value="adultdiper">Adult Diper</option>
            <option value="pad">Pad</option>
            <option value="pad">Other</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    <EmailContact/>
    </div>
  );
}

export default Contact;

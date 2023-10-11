import React, { useState } from 'react';
import "./Contact.css"
import showToast from "crunchy-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    ContactNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const [name, setName] = useState('');
  const [ContactNumber, setcontact] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = (e) => {
  
        
        showToast('Contacts Added Successfully ','success', 3000);


  };
      <h1 className='heading'>Contact Us</h1>
  return (


    <form onSubmit={handleSubmit} className='form-border'>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

       <label htmlFor="Contactnumber">Contact Number:</label>
      <input
        id="number"
        name="number"
        value={formData.number}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;

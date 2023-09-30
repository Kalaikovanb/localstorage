// src/components/LoginForm.js
import React, { useState } from 'react';
import './loginform.css';
function LoginForm({updateTable}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    phone: '',
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
    const { name, email, dob, phone } = formData;
    if(formData.name ==="" || formData.name ==="" || formData.email ==="" || formData.phone ===""){
      alert("Please Fill all the details");
      return;
    }

    const dobDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - dobDate.getFullYear();

    const userData = { name, email, dob, phone, age };
    const existingData = JSON.parse(localStorage.getItem('userData')) || [];
    const newData = [...existingData, userData];
    localStorage.setItem('userData', JSON.stringify(newData));

    setFormData({
      name: '',
      email: '',
      dob: '',
      phone: '',
    });
    updateTable();
  };

  return (
    <div className='full-form'>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>DOB:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;

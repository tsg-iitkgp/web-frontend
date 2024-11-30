import React, { useState } from 'react';
import './LetterToMe.css';


function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    otp: '',
    message: '',
    rollNo: '',
    gradYear: '',
  });
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const api = 'http://localhost:5050';

  const sendOtp = debounce(async () => {
    try {
      const response = await fetch(`${api}/api/letter/sentOtp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email }),
      });
      const data = await response.json();
      if (response.ok) {
        setIsOtpSent(true);
        alert(data.message); 
      } else {
        alert(data.message); 
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Error sending OTP. Please try again.');
    }
  }, 2000); 

  const verifyOtp = async () => {
    try {
      const response = await fetch(`${api}/api/letter/verifyOtp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, otp: formData.otp }),
      });
      const data = await response.json();
      if (response.ok) {
        setIsOtpVerified(true);
        alert(data.message); 
      } else {
        setIsOtpVerified(false);
        alert(data.message);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Error verifying OTP. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!isOtpVerified) {
      alert('Please verify your OTP before submitting the form.');
      return;
    }

    try {
      const response = await fetch(`${api}/api/letter/submitForm`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Form submitted successfully!'); 
      } else {
        alert(data.message); 
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h1>Your Form </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {!isOtpSent && (
          <button type="button" onClick={sendOtp}>
            Send OTP
          </button>
        )}

        {isOtpSent && (
          <>
            <label htmlFor="otp">OTP</label>
            <input
              type="text"
              id="otp"
              name="otp"
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={verifyOtp}>
              Verify OTP
            </button>
          </>
        )}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="rollNo">Roll Number</label>
        <input
          type="text"
          id="rollNo"
          name="rollNo"
          placeholder="Enter your roll number"
          value={formData.rollNo}
          onChange={handleChange}
          required
        />

        <label htmlFor="gradYear">Graduation Year</label>
        <input
          type="number"
          id="gradYear"
          name="gradYear"
          placeholder="Enter graduation year"
          value={formData.gradYear}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={!isOtpVerified}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

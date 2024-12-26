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
  const api = 'https://gymkhana.iitkgp.ac.in'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    otp: '',
    message: '',
    rollNo: '',
    sendDate: '',
  });
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [serverMessage, setServerMessage] = useState('');

  const isEmailValid = formData.email.endsWith('@kgpian.iitkgp.ac.in');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      if (!value.endsWith('@kgpian.iitkgp.ac.in')) {
        setEmailError('Please put your institute mail');
      } else {
        setEmailError('');
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const sendOtp = debounce(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${api}/api/letter/sentOtp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email }),
      });
      const data = await response.json();
      if (response.ok) {
        setIsOtpSent(true);
        setServerMessage(data.message); 
      } else {
        setServerMessage(data.message); 
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      setServerMessage('Error sending OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, 2000);

  const verifyOtp = async () => {
    try {
      const response = await fetch(`${api}/api/letter/verifyOtp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setServerMessage(data.message); 
        setFormData({
          name: '',
          email: '',
          otp: '',
          message: '',
          rollNo: '',
          sendDate: '',
        });
        setIsOtpSent(false);
      } else {
        setServerMessage(data.message); 
      }
    } catch (error) {
      console.error('Error verifying OTP or submitting form:', error);
      setServerMessage('Error verifying OTP or submitting form. Please try again.');
    }
  };

  return (
    <div className="backgroundImage">
      <div className="page-wrapper">
        <div className="form-container">
          <h1>Letter To Me</h1>
          <form onSubmit={(e) => e.preventDefault()}>
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

            <label htmlFor="sendDate">Send Date</label>
            <input
              type="date"
              id="sendDate"
              name="sendDate"
              value={formData.sendDate}
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
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}

            {!isOtpSent && isEmailValid && (
              <button
                type="button"
                onClick={sendOtp}
                className={isLoading ? 'loading' : ''}
                disabled={isLoading}
              >
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
                  Verify OTP & Submit Form
                </button>
              </>
            )}
          </form>
          {serverMessage && <p style={{ color: 'green' }}>{serverMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Form;

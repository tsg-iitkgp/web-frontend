import React, { useState } from "react";
import "./ContactForm.css";
import Layout from "../Layout";
import Styles from '../../styles/components/form.module.css';
import host from '../../apiService';

function ContactForm() {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        rollNumber,
        email,
        subject,
        message
      })
    }
    // sign in and get the token
    fetch(`${host}/api/main/contact-us/`, options)
      .then((response) => (response.json()))
      .then((jsonData) => {
        if (jsonData.success) {
          setStatusMessage('Form has been successfully submitted.');
          setIsLoading(false);
          setName('');
          setRollNumber('');
          setEmail('');
          setSubject('');
          setMessage('');
        } else {
          console.log('Error: ', jsonData.message);
          setStatusMessage('Form couldn\'t be submitted due to some technical issue. Please try again later.');
          setIsLoading(false);
        }

      }).catch((error) => {
        console.log('Error: ', error);
        setStatusMessage('Form couldn\'t be submitted due to some technical issue. Please try again later.');
        setIsLoading(false);
      });
  }
  return (
    <Layout>
      <div className="maindiv_loginpage">
        <div className="background_overlay">
          <div className="container_cf">
            <div className="frm--create-account">
              {/* <h1 className="frm__title">REACH OUT TO US!</h1>
              <form action="" className="frm__create__account">
                <div className="frm-group">
                  <label for="email1">Full Name</label>
                  <input type="text" id="email1" required />
                </div>
                <div className="frm-group inline">
                  <div className="frm-group">
                    <label for="nick1">Email ID</label>
                    <input type="text" id="nick1" required />
                  </div>
                  <div className="frm-group">
                    <label for="email1">Mobile Number</label>
                    <input type="tel" id="email1" required />
                  </div>
                  <div className="frm-group">
                    <label for="email1">Subject</label>
                    <input type="text" id="email1" required />
                  </div>
                  <div className="frm-group">
                    <label for="email1">Message</label>
                    <input type="textarea" id="email1" required />
                  </div>
                </div>
                <div className="frm-group">
                  <input
                    type="submit"
                    className="frm__btn-primary"
                    value="SEND"
                    onclick="return false;"
                  />
                </div>
              </form> */}
              <div className={Styles.formContainer}>
                <div className={Styles.header}>
                  <h1>
                    Reach Out To Us
                  </h1>
                  {
                    statusMessage && (
                      <p>
                        {statusMessage}
                      </p>
                    )
                  }
                </div>
                <div className={Styles.body}>
                  <form onSubmit={submitForm} className={Styles.form}>
                    <div className={Styles.formRow}>
                      <div>
                        <input name="name" value={name} onChange={(e) => (setName(e.target.value))} type={'text'} required />
                        <label htmlFor="name" className={Styles.labelName}>
                          <span className={Styles.contentName}>Name</span>
                        </label>
                      </div>
                      <div>
                        <input name="rollNumber" value={rollNumber} onChange={(e) => (setRollNumber(e.target.value))} type={'text'} required />
                        <label htmlFor="rollNumber" className={Styles.labelName}>
                          <span className={Styles.contentName}>Roll Number</span>
                        </label>
                      </div>
                    </div>
                    <div className={Styles.formRow}>
                      <div>
                        <input name="email" value={email} onChange={(e) => (setEmail(e.target.value))} type={'email'} required />
                        <label htmlFor="email" className={Styles.labelName}>
                          <span className={Styles.contentName}>Email</span>
                        </label>
                      </div>
                      <div>
                        <input name="subject" value={subject} onChange={(e) => (setSubject(e.target.value))} type={'text'} required />
                        <label htmlFor="subject" className={Styles.labelName}>
                          <span className={Styles.contentName}>Subject</span>
                        </label>
                      </div>
                    </div>
                    <div className={Styles.formRow}>
                      <div>
                        <input name="message" value={message} onChange={(e) => (setMessage(e.target.value))} type={'text'} required />
                        <label htmlFor="message" className={Styles.labelName}>
                          <span className={Styles.contentName}>
                            Message
                          </span>
                        </label>
                      </div>
                    </div>
                    {
                      isLoading ? (
                        <></>
                      ) : (
                        <div className={Styles.formRow}>
                          <button type={'submit'}>
                            Submit
                          </button>
                        </div>
                      )
                    }
                  </form>
                </div>
                <div className={Styles.footer}>
                  <p>
                    For any technical queries, please mail at {' '}
                    <a href="mailto:tech.tsgiitkgp@gmail.com">
                      tech.tsgiitkgp@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactForm;

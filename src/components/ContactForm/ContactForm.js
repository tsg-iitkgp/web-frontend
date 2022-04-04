import React from "react";
import "./ContactForm.css";
import Layout from "../Layout";
import Styles from '../../styles/components/form.module.css';

function ContactForm() {
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
                </div>
                <div className={Styles.body}>
                  <form className={Styles.form}>
                    <div className={Styles.formRow}>
                      <div>
                        <input type={'text'} required />
                        <label htmlFor="name" className={Styles.labelName}>
                          <span className={Styles.contentName}>Name</span>
                        </label>
                      </div>
                      <div>
                        <input type={'text'} required />
                        <label htmlFor="name" className={Styles.labelName}>
                          <span className={Styles.contentName}>Roll Number</span>
                        </label>
                      </div>
                    </div>
                    <div className={Styles.formRow}>
                      <div>
                        <input type={'email'} required />
                        <label htmlFor="name" className={Styles.labelName}>
                          <span className={Styles.contentName}>Email</span>
                        </label>
                      </div>
                      <div>
                        <input type={'text'} required />
                        <label htmlFor="name" className={Styles.labelName}>
                          <span className={Styles.contentName}>Subject</span>
                        </label>
                      </div>
                    </div>
                    <div className={Styles.formRow}>
                      <div>
                        <input type={'text'} required />
                        <label htmlFor="name" className={Styles.labelName}>
                          <span className={Styles.contentName}>
                            Message
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className={Styles.formRow}>
                      <button type={'submit'}>
                        Submit
                      </button>
                    </div>
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

import React from "react";
import "./ContactForm.css";
import Layout from "../Layout";
function ContactForm() {
  return (
    <Layout>
      <div className="maindiv_loginpage">
        <div className="background_overlay">
          <div className="container_cf">
            <div className="frm--create-account">
              <h1 className="frm__title">REACH OUT TO US!</h1>
              {/* <!-- create account form starts here --> */}
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
              </form>
              {/* <!-- /.create account form starts here --> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactForm;

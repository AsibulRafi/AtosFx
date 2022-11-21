import React, { useEffect } from "react";
import contactIcon1 from "../assets/contactIcon1.png";
import contactIcon2 from "../assets/contactIcon2.png";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="contact">
      <div className="contact__wrapper">
        <div className="contact__content">
          <h2>Contact Us</h2>
          <hr />
          <div className="contact__content-info">
            <div className="contact__content-info-flex">
              <img src={contactIcon1} alt="message" />
              <h3>Support email:</h3>
            </div>
            <p>support@atosfx.com</p>
          </div>
          <hr />
          <div className="contact__content-info">
            <div className="contact__content-info-flex">
              <img src={contactIcon2} alt="clock" />
              <h3>
                Monday to Friday:
                <br /> Sunday:
              </h3>
            </div>
            <p>9:30-21:00 GMT</p>
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Contact;

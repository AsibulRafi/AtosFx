import React, { useEffect } from "react";
import aboutImg from "../assets/aboutImg.png";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="about">
      <div className="about__wrapper">
        <div className="about__content">
          <div className="about__content-info">
            <h2>About Us</h2>
            <p>
              AtosFX was launched a few years back with a unique vision to
              provide unparalleled advanced trading conditions, advanced
              education, and state-of-the-art trading tools in the forex
              industry. Due to the continuous focus on localizing our products
              and services to suit each market, together with our successful
              collaboration with talented and experienced teams from all over
              the world. AtosFX was quickly established as the global trademark
              it is today.
            </p>
            <p>
              Our number one mission is centered on time. By valuing time and
              understanding the importance of efficiency in the fluctuating,
              lightning-fast world of financial markets, every decision we make
              is designed to ensure that our clients and business partners, as
              well as our team of professionals, invest their time wisely. This
              road is paved by an ironclad focus on educating our customers.
              Knowledge is power, and empowering traders to get the best value
              for their investments is our passion.
            </p>
            <p>
              At AtosFX we are committed to making sure all our clients and
              investors stay connected to the various opportunities that arise
              in the market on a daily basis and ease in connecting with one
              another. With AtosFX has your financial stockbroker you are sure
              to get all the professional backing and support you require to
              soar in Forex trading.
            </p>
          </div>
          <div className="about__content-img">
            <img src={aboutImg} alt="aboutImg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

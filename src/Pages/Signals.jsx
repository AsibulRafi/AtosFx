import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Signals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="signals">
      <div className="signals__content">
        <div className="signals__content-info">
          <h2>FOREX SIGNALS</h2>
          <p>
            At AtosFX we provide the best Forex signals by working closely with
            technology
            <br /> providers who are at the forefront of the industry.
          </p>
        </div>
        <Link to="/" className="signals__content-btn">
          Open Account
        </Link>
      </div>
    </section>
  );
};

export default Signals;

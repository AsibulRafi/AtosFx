import React, { useEffect } from "react";
import tradeIcon1 from "../assets/tradeIcon1.png";
import tradeIcon2 from "../assets/tradeIcon2.png";
import tradeIcon3 from "../assets/tradeIcon3.png";
import tradeIcon4 from "../assets/tradeIcon4.png";
import tradeIcon5 from "../assets/tradeIcon5.png";
import tradeIcon6 from "../assets/tradeIcon6.png";
import tradeIcon7 from "../assets/tradeIcon7.png";
import tradeIcon8 from "../assets/tradeIcon8.png";
const Trade = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="trade">
      <div className="trade__wrapper">
        <div className="hero__heading">
          <h2>TRADE WITH US</h2>
          <p>
            AtosFX presents its clients with the optimal platform for investing
            in Forex, Futures and Commodities.
            <br /> We are committed to providing each and every client with the
            best experience possible and always aim to provide the necessary
            means and resources for successful trading.
          </p>
        </div>
        <div className="trade__content">
          <div className="trade__content-item">
            <img src={tradeIcon1} alt="tradeIcon" />
            <p>
              Means for investing in Forex, futures and indices on a wide number
              of international marketplaces.
            </p>
          </div>
          <div className="trade__content-item">
            <img src={tradeIcon2} alt="tradeIcon" />
            <p>
              Top notch trading platforms, available on all relevant devices –
              PC, Mac, Android and Apple phones.
            </p>
          </div>
          <div className="trade__content-item">
            <img src={tradeIcon3} alt="tradeIcon" />
            <p>
              Timely reports and indicators, which let you follow how your
              trading develops with each signal, along with vital success
              strategies
            </p>
          </div>
          <div className="trade__content-item">
            <img src={tradeIcon4} alt="tradeIcon" />
            <p>
              A personalized education system – massive amounts of trading
              information at your disposal
            </p>
          </div>
          <div className="trade__content-item">
            <img src={tradeIcon5} alt="tradeIcon" />
            <p>Superior request processing and spreads</p>
          </div>
          <div className="trade__content-item">
            <img src={tradeIcon6} alt="tradeIcon" />
            <p>
              Algorithmic Trading – a computer program which aids you by making
              trading faster and better overall
            </p>
          </div>
          <div className="trade__content-item">
            <img src={tradeIcon7} alt="tradeIcon" />
            <p>
              Various account options, catering to each client`s specific
              circumstances. You can also upgrade your account at a later stage.
            </p>
          </div>
          <div className="trade__content-item">
            <img src={tradeIcon8} alt="tradeIcon" />
            <p>
              Excellent client care and technical support, which lets you focus
              on trading
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trade;

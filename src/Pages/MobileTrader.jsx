import React, { useEffect } from "react";
import mobileTraderImg from "../assets/mobileTrader.png";
const MobileTrader = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="mobileTrader">
      <div className="mobileTrader__wrapper">
        <div className="mobileTrader__hero">
          <div className="mobileTrader__hero-info">
            <h2>Mobile Trader</h2>
            <p>
              AtosFX Trading Mobile
              <br />
              Application: The independence to trade at any time and place
            </p>
            <p>
              Don’t lag – begin making trades from your device, no matter if
              it’s phone or tablet, Apple or Android AtosFX mobile software
              gives you the opportunity to invest, operate your profile and
              check Special AtosFX mobile software affords you with abilities to
              invest, to operate personal profile and to check the newest
              financial tendencies with no strict attachment to time and place
              where you are, and without a fee. The possible potential of that
              software is to please every trader, whether a beginner or an
              advanced patron. Keywords inside of that are intuitive plain.
            </p>
            <div className="mobileTrader__hero-info-btns">
              <button type="button">Windows</button>
              <button type="button">MAC OS</button>
            </div>
          </div>
          <div className="mobileTrader__hero-img">
            <img src={mobileTraderImg} alt="mobiletraderImg" />
          </div>
        </div>
        <div className="mobileTrader__content">
          <div className="mobileTrader__content-info">
            <h2>
              Trading Mobile Application:
              <br /> The independence to trade at any time and place
            </h2>
            <div className="mobileTrader__content-info-flex">
              <div className="mobileTrader__content-info-flex-box"></div>
              <p>Easy to use exploitation and navigation design</p>
            </div>
            <div className="mobileTrader__content-info-flex">
              <div className="mobileTrader__content-info-flex-box"></div>
              <p>You will be able to trade just once you log in</p>
            </div>
            <div className="mobileTrader__content-info-flex">
              <div className="mobileTrader__content-info-flex-box"></div>
              <p>Extensive, Widespread & Effective</p>
            </div>
            <div className="mobileTrader__content-info-flex">
              <div className="mobileTrader__content-info-flex-box"></div>
              <p>Flawless safety of Forex investment</p>
            </div>
            <div className="mobileTrader__content-info-flex">
              <div className="mobileTrader__content-info-flex-box"></div>
              <p>Logging of all your investments</p>
            </div>
          </div>
          <div className="mobileTrader__content-text">
            <p>
              As we have mentioned before, this software is suitable for almost
              all devices, whether it’s Apple or Android products. Stay informed
              regarding newest market processes, and act deliberately keeping to
              it. Place deals freely strict from your mobile.
            </p>
            <p>
              Invest your capital in a broad assortment of instruments and come
              in the global markets. Combined chartings among with symbols,
              together with technological statistics and the newest financial
              tendencies could assist you in the decision to open or close
              agreed position. Besides of that, platform affords an absolutely
              safeness and privacy of its mobile software for your use.
            </p>
            <p>
              Use your mobile device to invest in a variety of financial
              instruments – Forex, Futures and Commodities.
            </p>
            <p>
              Try your mobile device to invest in wide range of trading
              instruments, such as Forex, Futures and Commodities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileTrader;

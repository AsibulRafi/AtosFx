import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import webTraderImg from "../assets/webTrader.png";
const WebTrader = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="webTrader">
      <div className="webTrader__wrapper">
        <div className="webTrader__hero">
          <div className="webTrader__hero-info">
            <h2>Web Trader</h2>
            <p>
              AtosFX highest purpose is to turn its clients into successful
              traders and increase their success rates as much as possible. For
              that purpose we give you the Litfinance Online trader, which
              enables you to be 100% involved in the trading process and adjust
              according to the market conditions, all the while letting you plan
              your trading activities to your preference.
            </p>
            <p>
              Utilize the full scope of the latest technological developments in
              the field by trading from any internet connectible device.
              Investing in Forex, Commodities and CFD has never been easier
              thanks to the AtosFX Online Trader.
            </p>
            <Link to="/" className="webTrader__hero-info-btn">
              Open Account
            </Link>
          </div>
          <div className="webTrader__hero-img">
            <img src={webTraderImg} alt="webtraderImg" />
          </div>
        </div>
        <div className="webTrader__content">
          <div className="webTrader__content-props">
            <h2>Some of the other props of the platform are:</h2>
            <div className="webTrader__content-props-flex">
              <div className="webTrader__content-props-flex-item">
                <div className="webTrader__content-flex">
                  <div className="webTrader__content-flex-box"></div>
                  <p>Instant Execution.</p>
                </div>
                <div className="webTrader__content-flex">
                  <div className="webTrader__content-flex-box"></div>
                  <p>Automated Trading.</p>
                </div>
                <div className="webTrader__content-flex">
                  <div className="webTrader__content-flex-box"></div>
                  <p>Secure Application.</p>
                </div>
                <div className="webTrader__content-flex">
                  <div className="webTrader__content-flex-box"></div>
                  <p>Advanced charts availability.</p>
                </div>
                <div className="webTrader__content-flex">
                  <div className="webTrader__content-flex-box"></div>
                  <p>Slippage protection.</p>
                </div>
              </div>
              <div className="webTrader__content-props-flex-item">
                <div className="webTrader__content-flex">
                  <div className="webTrader__content-flex-box"></div>
                  <p>3rd party bridging.</p>
                </div>
                <div className="webTrader__content-flex">
                  <div className="webTrader__content-flex-box"></div>
                  <p>Availability of four pending orders</p>
                </div>
                <div className="webTrader__content-flex">
                  <div className="webTrader__content-flex-box"></div>
                  <p>Buy Limit, Buy Stop, Sell Limit, Sell Stop.</p>
                </div>
                <div className="webTrader__content-flex">
                  <div className="webTrader__content-flex-box"></div>
                  <p>0.01 lot sizes.</p>
                </div>
                <div className="webTrader__content-flex">
                  <div className="webTrader__content-flex-box"></div>
                  <p>Partial closing and many others.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="webTrader__content-text">
            <p>
              AtosFX grants you a gateway to all your trading needs with the
              online and mobile trading applications. They are extremely
              intuitive and functional, enabling you to start a trade whenever
              you want, from anywhere in the world. In case you already have a
              trading account you can start a trade immediately.
            </p>
            <p>
              The AtosFX Online Trader present clients with the option to choose
              from a number of languages, it features the latest charts, fast
              operation of the trades, and best of all, it makes everything
              easy. You have the ability to access to trader from a number of
              different devices such as Apple or Android phone, tablet or PC.
              The platform is easy to use on every device and you can handle
              your investments with just a few clicks.
            </p>
            <p>
              Due to the intuitiveness and easiness of use, the AtosFX Online
              trader will make sure that you are fully informed about all trades
              that interest you. Stay knowledgeable on the latest market news
              and trends, without having to leave your couch.
            </p>
          </div>
          <div className="webTrader__content-info">
            <h2>Some of the other pros of the platform are:</h2>
            <div className="webTrader__content-flex">
              <div className="webTrader__content-flex-box"></div>
              <p>Have full control over your profile.</p>
            </div>
            <div className="webTrader__content-flex">
              <div className="webTrader__content-flex-box"></div>
              <p>Perform in-depth market analysis.</p>
            </div>
            <div className="webTrader__content-flex">
              <div className="webTrader__content-flex-box"></div>
              <p>Invest in a wide selection of assets.</p>
            </div>
          </div>
          <div className="webTrader__content-text">
            <p>
              The financial market can be very volatile and the conditions can
              change in a matter of minutes. Therefore, you need to be able to
              react quickly in such cases. With the AtosFX Online Trader, you
              act accordingly and access your trades at any moment. The
              advantage is in your hands.
            </p>
            <p>
              With the hastened pace of modern life, you need to be constantly
              on the go, but the platform lets you combine that with your
              trading needs, without having to compromise. It`s accessible from
              any browser, there is no need for you to be stuck to any specific
              place. Be it in your office, or from a friend`s PC, logging into
              your account and trading or just checking something is quick and
              simple.
            </p>
            <p>Using AtosFX to trade is like a walk in the park.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebTrader;

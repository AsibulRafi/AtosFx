import React from "react";
import { Link } from "react-router-dom";
import homeTradingIcon1 from "../assets/homeTradingIcon1.png";
import homeTradingIcon2 from "../assets/homeTradingIcon2.png";
import homeTradingIcon3 from "../assets/homeTradingIcon3.png";
import homeTradingIcon4 from "../assets/homeTradingIcon4.png";
import stepIcon1 from "../assets/stepIcon1.png";
import stepIcon2 from "../assets/stepIcon2.png";
import stepIcon3 from "../assets/stepIcon3.png";
import stepIcon4 from "../assets/stepIcon4.png";
import tradeNImg from "../assets/tradeNimg.png";
import brokerImg from "../assets/brokerImg.png";
import Slider from "../Components/Slider";
const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h2>
              Our novelty tools -<br /> your successful goals
            </h2>
            <p>
              Trading in Forex, Metals, Indexes, Energies,
              <br /> Stocks, ETFs and Cryptocurrencies
            </p>
            <Link to="/" className="hero__content-Btn">
              Open Account
            </Link>
          </div>
        </div>
      </section>
      <section className="homeTrading">
        <div className="homeTrading__heading">
          <h2>
            <span>ATOSfx</span> Trading
          </h2>
          <p>
            Your goals are unique, so your investment guidance should be too.
            This is why at Litfinance we take the time to listen
            <br /> and understand what matters most to you before helping you
            develop and manage your investment strategy.
          </p>
        </div>
        <div className="homeTrading__content">
          <div className="homeTrading__item">
            <div className="homeTrading__item-heading">
              <img src={homeTradingIcon1} alt="homeTradingIcon" />
              <h2>
                INTUITIVE TOOLS AND <br /> COMPETITIVE PRICING
              </h2>
            </div>
            <p>
              Whether you’re an active trader or long-term investor our web,
              mobile, and downloadable platforms give you everything you need to
              research stocks, place trades, and manage your portfolio with
              live-streaming access, real-time quotes and specialists with years
              of floor trading experience. As an STP (Straight Through
              Processing) broker, we do not have any conflict of interest
              regarding our clients’ trades, as we only receive a commission on
              the volume of the trades and do not benefit in any additional way
              by any client losses.
            </p>
          </div>
          <div className="homeTrading__item">
            <div className="homeTrading__item-heading">
              <img src={homeTradingIcon2} alt="homeTradingIcon" />
              <h2>
                TRANSPARENT AND <br /> TRUSTWORTHY
              </h2>
            </div>
            <p>
              For a few years now, ATOSfx has been proud to help our clients
              pursue their financial goals while giving them more time to focus
              on what really matters in life. Everything we provide, from
              guidance to powerful trading tools, to retirement resources is
              built around one thing, you. We know it’s important to get
              professional guidance you can trust. That’s why our experienced,
              licensed reps are available by phone, email, online, and in person
              for one-on-one support when you need it most. You can always count
              on us.
            </p>
          </div>
          <div className="homeTrading__item">
            <div className="homeTrading__item-heading">
              <img src={homeTradingIcon3} alt="homeTradingIcon" />
              <h2>SECURED FUNDS</h2>
            </div>
            <p>
              Your funds are kept in segregated 3rd party regulated financial
              institutions and we use advanced encryption tools to keep all of
              your transactions and personal data safe and secured. Also our
              flat-rate commission on all online equity trades gives you access
              to our award-winning investing and trading experience. Plus, we
              keep our pricing simple with no share limits or hidden fees, no
              trade requirements to access advanced features, and no deposit
              minimums. At Atosfx all transactions are simple and direct.
            </p>
          </div>
          <div className="homeTrading__item">
            <div className="homeTrading__item-heading">
              <img src={homeTradingIcon4} alt="homeTradingIcon" />
              <h2>ALGO TRADING</h2>
            </div>
            <p>
              Algorithmic Trading is a program that offers everyone the
              opportunity to trade with better precision and high success rate
              than he/she would normally get. It makes use of a scenario-based
              approach and artificial intelligence so as to develop the best
              trading approach for the circumstances. Different variables such
              as price, quantity and time period are taken into serious
              consideration as well. The number of traders that use our
              Algorithmic trading keeps increasing by the day, as it makes the
              trading journey easy and well-profiting.
            </p>
          </div>
        </div>
      </section>
      <section className="tradeN">
        <div className="tradeN__wrapper">
          <div className="tradeN__content">
            <div className="tradeN__content-info">
              <h2>TRADE NOW</h2>
              <p>
                Trade Shares, Indices, Forex, Commodities and Cryptocurrencies
                with CFDs
              </p>
              <Link to="/" className="tradeN__content-info-btn">
                Sign Up For Free
              </Link>
              <h4>TradingCFDs involves risk of loss</h4>
            </div>
            <div className="tradeN__content-img">
              <img src={tradeNImg} alt="tradeNowImg" />
            </div>
          </div>
        </div>
      </section>
      <section className="broker">
        <div className="broker__wrapper">
          <div className="broker__content">
            <div className="broker__content-img">
              <img src={brokerImg} alt="brokerImg" />
            </div>
            <div className="broker__content-info">
              <h2>A TRADER ORIENTED BROKER</h2>
              <p>
                Atosfx is a top online Forex broker with many years of
                experience in the market. Atosfx being a client-oriented
                company, places the needs of every one of our customers as its
                own priority. We are committed to providing all our investors a
                wide range of options when trading to help them become better at
                trading and also make profits.
              </p>
              <p>
                At Atosfx we ensure all our clients are up to date with the
                market trends and also provide them with latest trading
                technology and Forex tools by investing continuously in
                innovations. These instruments are updated on a regular basis
                thereby offering new platforms and services to answer the
                various questions and meet the need of every trader, in so
                doing; we are keeping our promise and commitment towards a fair
                and open trading.
              </p>
              <p>
                All our trusted clients have a 24/7 access to our various
                comprehensive educational materials. These materials help
                trader’s understand and learn more about the various online
                operations, trading and the global market in general. We have a
                great customer support team which is always and readily
                available to assist with any issue you might encounter or
                challenge you might face in the course of trading.
              </p>
              <p>
                At Atosfx we place high importance and emphasis on customer
                satisfaction, and we are dedicated to being more than just an
                online broker to our clients. Make your trading experience worth
                it, choose a right broker, and choose Atosfx!
              </p>
            </div>
          </div>
        </div>
      </section>
      <Slider />
      <section className="step">
        <div className="step__flex">
          <h2 className="step__flex-heading">
            BEGIN YOUR TRADING EXPERIENCE WITH AtosFX IN 4 EASY STEPS
          </h2>
          <div className="step__content">
            <div className="step__content-item">
              <img src={stepIcon1} alt="stepicon" />
              <h2>SIGN UP</h2>
              <p>
                Create your Live Trading <br />
                Account on Atosfx
              </p>
            </div>
            <div className="step__content-item">
              <img src={stepIcon2} alt="stepicon" />
              <h2>VERIFICATION</h2>
              <p>
                Upload Necessary Documents <br />
                to Verify your Account
              </p>
            </div>
            <div className="step__content-item">
              <img src={stepIcon3} alt="stepicon" />
              <h2>DEPOSIT</h2>
              <p>
                Login to your Account and
                <br /> Make a Deposit
              </p>
            </div>
            <div className="step__content-item">
              <img src={stepIcon4} alt="stepicon" />
              <h2>START TRADING</h2>
              <p>
                Trade and Choose from Numerous
                <br /> Instruments Available <br />
                on Atosfx
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

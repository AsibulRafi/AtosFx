import React, { useEffect } from "react";
import one from "../assets/stepIcon1.png";
import two from "../assets/stepIcon2.png";
import three from "../assets/stepIcon3.png";
const CFD = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="page">
      <div className="page__wrapper">
        <div className="page__content">
          <div className="page__content-heading">
            <h2>STOCKS CFD</h2>
            <p>
              Algo Trading becomes very popular nowadays due to its active
              development. It is a program for investors to become more
              successful, have favorable outcomes and constantly evolve. Algo
              Trading is based on the artificial intelligence and scenario-based
              approach that help investors have profitable trading. The time
              period, quantity and price are, of course, taken into account
              while creating trading strategies.
            </p>
          </div>
          <div className="page__content-allow">
            <h2>The assistance of the software will be:</h2>
            <div className="page__content-allow-flex">
              <div className="page__content-allow-flex-box"></div>
              <p>
                Help detect the quality of affording gain, which will be best
                for investors
              </p>
            </div>
            <div className="page__content-allow-flex">
              <div className="page__content-allow-flex-box"></div>
              <p>Reduced expenses</p>
            </div>
            <div className="page__content-allow-flex">
              <div className="page__content-allow-flex-box"></div>
              <p>Lucidity becomes more perceptible</p>
            </div>
            <div className="page__content-allow-flex">
              <div className="page__content-allow-flex-box"></div>
              <p>
                Amend balance of commitment and planning of trading actionss
              </p>
            </div>
            <div className="page__content-allow-flex">
              <div className="page__content-allow-flex-box"></div>
              <p>
                Develop investor’s skills to analyze and take action according
                to the trading situation
              </p>
            </div>
          </div>
          <div className="page__content-text">
            <p>
              Fast multiple investing – the quantity of trading operations the
              Algo Trading is able to perform is way higher and differs from any
              regular trader. The software may proceed with repeated tasks
              through a certain time period and this may take place in various
              markets. Of course, all taken actions are intended to improve
              investor’s trading progress 24/7 – you won’t have to plan your
              trading and follow any platform’s working curfews, the software
              offers its services non-stop to draw more traders and help them
              get more profit any time, suitable for them.
            </p>
            <p>
              Mechanized work – as we are using artificial intelligence and
              specific algorithms, all our investors should not worry about
              human factor (stress, personal problems, unfocused work etc) that
              may cause any losses.
            </p>
            <p>
              Seeing all cards – investors can take their time and build a
              strategy, see through all pros and cons of the trading and future
              actions because there will be no need to control the system that
              will be automatically doing its job and handling all “unnecessary”
              things.
            </p>
          </div>
          <div className="page__content-allow">
            <h2>Various robot-functions</h2>
            <div className="page__content-allow-flex">
              <div className="page__content-allow-flex-box"></div>
              <p>
                Auto-search – the system will constantly update the market and
                search for
                <br /> the best trading opportunities and options according to
                the inquiry and will send
                <br /> notifications right away
              </p>
            </div>
            <div className="page__content-allow-flex">
              <div className="page__content-allow-flex-box"></div>
              <p>
                Make trades – the robot will assist the investor to create a
                number of trades right away. All actions will be done in
                accordance with the specific instructions, set by the trader,
                and will also correspond to the specific risk margins
              </p>
            </div>
            <div className="page__content-allow-flex">
              <div className="page__content-allow-flex-box"></div>
              <p>
                The strategy of the investment – the robot works according to
                the set algorithm, which helps to find best deals, best
                opportunities on the market. It also is done in accordance with
                the special user’s preferences
              </p>
            </div>
          </div>
          <div className="page__content-text">
            <p>
              Depending on the chosen risk profile, all robots have the same
              mechanism: they have various setting options to choose.The trading
              principle here is as usual: the more you set on the table (and
              accordingly the risks get higher), the more you may get as a
              reward.
            </p>
          </div>
          <div className="page__content-tree">
            <h2>Tree variants for trading:</h2>
            <div className="page__content-tree-flex">
              <img src={one} alt="icon" />
              <p>
                Classics of the market – you should choose this risk profile if
                you are trading in small amounts. You will get support and
                feedback within this profile if funds amount does not outbid 10
                000 USD, and annual percentage rate is 3, which will surely help
                the trader with any shortages
              </p>
            </div>
            <div className="page__content-tree-flex">
              <img src={two} alt="icon" />
              <p>
                Know-how investor – this one should be chosen if you have
                already traded for some time and you have quite a bit knowledge
                of the trading principals. Annual percentage rate – 7, maximum
                money amount – 50 000 USD
              </p>
            </div>
            <div className="page__content-tree-flex">
              <img src={three} alt="icon" />
              <p>
                Professional businessman – on this profile terms you will have
                the percentage rate of 25 (can you actually imagine) and the sum
                of the account should exceed 50 000 USD
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CFD;

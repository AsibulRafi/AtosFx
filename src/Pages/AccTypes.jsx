import React, { useEffect } from "react";
import { BsDashLg } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
import one from "../assets/stepIcon1.png";
import two from "../assets/stepIcon2.png";
import three from "../assets/stepIcon3.png";
const AccTypes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="accTypes">
      <div className="hero__heading">
        <h2>Account Types</h2>
        <p>
          Our accounts provide benefits of Forex market to private and corporate
          clients, using one of the most advanced trading platforms available.
        </p>
      </div>
      <div className="accTypes__content">
        <div className="accTypes__content-table">
          <table className="accTypes__content-table-content">
            <thead>
              <tr>
                <th style={{ backgroundColor: "#e7e7e7" }}></th>
                <th>Mini</th>
                <th>Classic</th>
                <th style={{ backgroundColor: "#e7e7e7" }}>Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td style={{ backgroundColor: "#fff" }}>
                  Basic Trading for <br />
                  Beginners
                </td>
                <td style={{ backgroundColor: "#fff" }}>
                  For Skilled <br /> Investor
                </td>
                <td>
                  Advanced Trading For <br /> Experienced Investors
                </td>
              </tr>
              <tr>
                <td></td>
                <td style={{ color: "#357abf" }}>$500</td>
                <td style={{ color: "#357abf" }}>$5,000</td>
                <td style={{ color: "#357abf" }}>$20,000</td>
              </tr>
              <tr>
                <td>Online Chat Support </td>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
              </tr>
              <tr>
                <td>Platforms: MT4﹠Mobile</td>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
              </tr>
              <tr>
                <td>Instruments: Forex, CFDs﹠Commodities</td>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
              </tr>
              <tr>
                <td>Free E-book</td>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
              </tr>
              <tr>
                <td>Individual Competitive Spreads﹠Commissions</td>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
              </tr>
              <tr>
                <td>Access to Breaking News﹠ Market Research</td>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
              </tr>
              <tr>
                <td>Online Phone Support</td>
                <td>
                  <BsDashLg />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
              </tr>
              <tr>
                <td>Real-Time Trading Signals</td>
                <td>
                  <BsDashLg />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
              </tr>
              <tr>
                <td>Trading Education Program</td>
                <td>
                  <BsDashLg />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
              </tr>
              <tr>
                <td>Account Executive Team Available 24/7</td>
                <td>
                  <BsDashLg />
                </td>
                <td>
                  <BsDashLg />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
              </tr>
              <tr>
                <td>Trade Mentor</td>
                <td>
                  <BsDashLg />
                </td>
                <td>
                  <BsDashLg />
                </td>
                <td>
                  <AiOutlineCheck />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Link to="/" className="accTypes__content-table-content-btn">
                    Open Account
                  </Link>
                </td>
                <td>
                  <Link to="/" className="accTypes__content-table-content-btn">
                    Open Account
                  </Link>
                </td>
                <td>
                  <Link to="/" className="accTypes__content-table-content-btn">
                    Open Account
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="accTypes__content-info">
          <h2 className="accTypes__content-info-heading">
            Steps for opening a AtosFX Trading Profile
          </h2>
          <div className="accTypes__content-info-flex">
            <img src={one} alt="one" />
            <div className="accTypes__content-info-flex-info">
              <h2>
                Pick the account types depending on your objectives and needs
              </h2>
              <p>
                Three available account types are supplemented with lots of
                additional features that bring some extra pluses to the
                investor. You can easily sign up for any of them. And keep the
                notice that you can change the account type after putting money
                on your acc.
              </p>
            </div>
          </div>
          <div className="accTypes__content-info-flex">
            <img src={two} alt="two" />
            <div className="accTypes__content-info-flex-info">
              <h2>
                Fill out the demanded information and confirm your identity
              </h2>
              <p>
                You just need to complete information profile with your personal
                data and to provide some identity papers.
              </p>
            </div>
          </div>
          <div className="accTypes__content-info-flex">
            <img src={three} alt="three" />
            <div className="accTypes__content-info-flex-info">
              <h2>Depositing money into your account</h2>
              <p>
                Once we approve and authorize your application, you will be able
                to make your payments and withdrawals swiftly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccTypes;

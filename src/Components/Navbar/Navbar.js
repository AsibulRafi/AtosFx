import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../assets/logo.png";
import "./style.css";
const Navbar = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="wrapper">
      <nav>
        <input
          type="checkbox"
          id="show-menu"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="show-menu" className="menu-icon">
          <i className="fa-solid fa-bars" id="bar"></i>
        </label>
        <div className="logo">
          <Link to="/" id="logo">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="content">
          <ul className="links" id="links">
            <li>
              <Link to="/about" className="desktop-link">
                ABOUT US
              </Link>
              <input type="checkbox" id="show-about" />
              <label htmlFor="show-about">ABOUT US</label>
              <ul>
                <li>
                  <Link to="/about" onClick={() => setChecked(false)}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setChecked(false)}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/security" onClick={() => setChecked(false)}>
                    Security
                  </Link>
                </li>
              </ul>
            </li>
            {/* Another Nav */}
            <li>
              <Link to="/acctypes" className="desktop-link">
                ACCOUNTS
              </Link>
              <input type="checkbox" id="show-accounts" />
              <label htmlFor="show-accounts">ACCOUNTS</label>
              <ul>
                <li>
                  <Link to="/acctypes" onClick={() => setChecked(false)}>
                    Account types
                  </Link>
                </li>
                <li>
                  <Link to="/segreaccounts" onClick={() => setChecked(false)}>
                    SEGREGATED ACCOUNTS
                  </Link>
                </li>
                <li>
                  <Link to="/trade" onClick={() => setChecked(false)}>
                    Trade With Us
                  </Link>
                </li>
              </ul>
            </li>
            {/* Another Nav */}
            <li>
              <Link to="/webtrader" className="desktop-link">
                Platforms
              </Link>
              <input type="checkbox" id="show-platform" />
              <label htmlFor="show-platform">Platform</label>
              <ul>
                <li>
                  <Link to="/webtrader" onClick={() => setChecked(false)}>
                    Web Trader
                  </Link>
                </li>
                <li>
                  <Link to="/mobiletrader" onClick={() => setChecked(false)}>
                    Mobile Trader
                  </Link>
                </li>
              </ul>
            </li>

            {/* Another Nav */}
            <li>
              <Link to="/forex" className="desktop-link">
                TOOLS
              </Link>
              <input type="checkbox" id="show-tools" />
              <label htmlFor="show-tools">TOOLS</label>
              <ul>
                <li>
                  <Link to="/forex" onClick={() => setChecked(false)}>
                    Forex
                  </Link>
                </li>
                <li>
                  <Link to="/commodities" onClick={() => setChecked(false)}>
                    Commodities
                  </Link>
                </li>
                <li>
                  <Link to="/indices" onClick={() => setChecked(false)}>
                    Indices
                  </Link>
                </li>
                <li>
                  <Link to="/cfd" onClick={() => setChecked(false)}>
                    CFD Stocks
                  </Link>
                </li>
                <li>
                  <Link to="/Signals" onClick={() => setChecked(false)}>
                    Signals
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a href="https://client.digitexmarkets.com/">
                <button className="header__lg-btn">Login</button>
              </a>
              <a href="https://client.digitexmarkets.com/register">
                <button className="header__oa-btn">Open Account</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

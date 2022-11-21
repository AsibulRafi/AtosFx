import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__wrapper">
        <div className="footer__links">
          <div className="footer__links-single">
            <h2>About Us</h2>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/security">Security</Link>
          </div>
          <div className="footer__links-single">
            <h2>Accounts</h2>
            <Link to="/acctypes">Account Types</Link>
            <Link to="/segreaccounts">SEGREGATED ACCOUNTS</Link>
            <Link to="/webtrader">Web Trader</Link>
            <Link to="/mobiletrader">Mobile Trader</Link>
          </div>
          <div className="footer__links-single">
            <h2>Assets</h2>
            <Link to="/forex">Forex</Link>
            <Link to="/commodities">Commodities</Link>
            <Link to="/indices">Indices</Link>
            <Link to="/cfd">Stocks</Link>
            <Link to="/signals">Signals</Link>
            <Link to="/trade">Trading</Link>
          </div>
          <div className="footer__links-single">
            <h2>Resources</h2>
            <Link to="/terms">Terms And Condition</Link>
            <Link to="/risk">Risk Disclosure</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/kyc">KYC Policy</Link>
          </div>
        </div>
        <div className="footer__risk">
          <h2>Risk Warning</h2>
          <p>
            Trading in Forex and CFDs carries a high level of risk and can
            result in the loss of part or all of your investment. Trading in
            Forex and CFDs may not be appropriate for all investors. You should
            be aware of all the risks associated with Forex and CFD trading and
            seek for independent advice. Past performance does not constitute a
            reliable indication of future results. Forecasts for the future do
            not constitute a reliable indicator of future performance. Copyright
            for the pages and for the screens displaying the pages, and for the
            information, material and their arrangement, is owned by AtosFX LTD
            all rights reserved.
          </p>
          <p>
            This information is intended for investors outside the United States
            who are not US/Japanese citizens and residents. This website is
            intended for informational purposes only. This website is not
            directed at any jurisdiction and is not intended for any use that
            would be contrary to local law or regulation. The products described
            on this are not offered and may not be sold in the United
            States/Japan or to US/Japanese citizens and residents.
          </p>
        </div>
        <div className="copyright">&#169; 2022 All right reserved AtosFX</div>
      </div>
    </section>
  );
};

export default Footer;

import React, { useEffect } from "react";

const SegreAccounts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="accounts">
      <div className="accounts__wrapper">
        <div className="hero__heading">
          <h2>SEGREGATED ACCOUNTS</h2>
          <p>
            The unique AtosFX Account allows our clients to conduct trades
            perfectly protects them out of slow transaction times or information
            and payments errors.
          </p>
        </div>
        <div className="accounts__content">
          <h2>Advantages:</h2>
          <p>
            There are few more additional benefits that are shaped exactly to
            satisfy our client’s <br />
            needs. You can be sure in:
          </p>
          <div className="accounts__content-items">
            <div className="accounts__content-flex">
              <div className="accounts__content-flex-box"></div>
              <p>100% client orientated experience</p>
            </div>
            <div className="accounts__content-flex">
              <div className="accounts__content-flex-box"></div>
              <p>Effective use of your capital</p>
            </div>
            <div className="accounts__content-flex">
              <div className="accounts__content-flex-box"></div>
              <p>
                Convenient and client-friendly management
                <br /> of your funds
              </p>
            </div>
            <div className="accounts__content-flex">
              <div className="accounts__content-flex-box"></div>
              <p>
                24/5 client support and help in dealing with the most
                <br /> common issues
              </p>
            </div>
            <div className="accounts__content-flex">
              <div className="accounts__content-flex-box"></div>
              <p> 128 bit SSL Security Protocols</p>
            </div>
          </div>
          <h2>When will a Senior Broker be assigned to me?</h2>
          <p>
            Your Personal Senior Broker will be assigned to you upon activating
            and funding your account.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SegreAccounts;

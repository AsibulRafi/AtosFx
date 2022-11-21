import React, { useEffect } from "react";

const KYC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="page">
      <div className="page__wrapper">
        <div className="page__content">
          <div className="page__content-heading">
            <h2>KYC POLICY</h2>
            <p>
              Know your customer policies have become increasingly important
              worldwide lately, especially among banks and other financial
              institutions, in order to prevent identity theft, money
              laundering, financial fraud and terrorist activity.
            </p>
            <p>
              AtosFX holds a zero tolerance fraud policy and is taking all
              measures possible to prevent it. Any fraudulent activity will be
              documented and all related accounts to it will be immediately
              closed. All funds in these accounts will be forfeited.
            </p>
          </div>
          <div className="page__content-text">
            <h2>Prevention:</h2>
            <p>
              AtosFX aims to ensure the integrity of any sensitive data it
              obtains, such as your account information and the transactions you
              make, using a variety of security measures and fraud controls.
              Securing your electronic transactions requires us to be provided
              with certain data from you, including your preferred deposit
              method.
            </p>
          </div>
          <div className="page__content-allow">
            <h2>
              When you deposit funds we will require the following documents:
            </h2>
            <div className="page__content-allow-flex">
              <div className="page__content-allow-flex-box"></div>
              <p>A copy of your valid passport with the signature page</p>
            </div>
            <div className="page__content-allow-flex">
              <div className="page__content-allow-flex-box"></div>
              <p>
                Copies of your credit cards used to make the deposit (The front
                side with only the 4 last digits visible, backside with the CVV
                covered)
              </p>
            </div>
            <div className="page__content-allow-flex">
              <div className="page__content-allow-flex-box"></div>
              <p>A copy of a recent utility bill in your name and address</p>
            </div>
            <div className="page__content-allow-flex">
              <div className="page__content-allow-flex-box"></div>
              <p>A signed purchase history of your online transactions</p>
            </div>
          </div>
          <div className="page__content-text">
            <h2>
              If you have any questions please don’t hesitate to contact our
              customer support:
            </h2>
            <p>support@atosfx.com</p>
            <h2>When do I need to provide these documents?</h2>
            <p>
              We highly appreciate you taking the time to provide us with all
              the necessary documents as soon as you can, in order to avoid any
              delays in processing your transactions. We require the receipt of
              all the necessary documents prior to making any cash transactions
              to your benefit. Some circumstances may require us to request
              these documents before allowing any other activities in your
              account, such as deposits or trades.
            </p>
            <p>
              Please note that if we will not receive the required documents on
              file, your pending withdrawals will be canceled and credited back
              to your trading account. We will notify you in such event via our
              system.
            </p>
            <h2>How can I send you these documents?</h2>
            <p>
              Please scan your documents, or take a high-quality digital camera
              picture, save the images as jpegs, then send it to us via mail to
              support@atosfx.com
            </p>
            <h2>How do I know my documents are safe with you? </h2>
            <p>
              AtosFX holds the security of documentation with the highest
              priority and treats all documents it receives with utmost respect
              and confidentiality. All files we obtain are fully protected using
              the highest level possible of encryption at every step of the
              review process. We thank you for your cooperation in helping us
              make AtosFX a safer place to trade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KYC;

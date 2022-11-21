import React, { useEffect } from "react";

const Indices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="page">
      <div className="page__wrapper">
        <div className="page__content">
          <div className="page__content-heading">
            <h2>INDICES</h2>
            <p>
              AtosFX offers to invest in indices from any place in the globe in
              super flexible and easy way. An index is a general performance
              indicator for the essential cluster of stocks which can be sorted
              by location, exchange point or many other things. Major Stock
              Index section is responsible for this and it also supports traders
              to see how a certain stock group is forming. Among many of others,
              you can find the most traded indices such as the NASDAQ, S&P 500,
              FTSE and the Dow Jones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Indices;

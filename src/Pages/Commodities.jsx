import React, { useEffect } from "react";

const Commodities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="page">
      <div className="page__wrapper">
        <div className="page__content">
          <div className="page__content-heading">
            <h2>COMMODITIES</h2>
            <p>
              MetaTrader4 is commonly a known trading software used by the
              AtosFX platform that, added with our high degree of professional
              experience and knowledge, could bring you the most higher Forex
              trading results on the web. You can perform your trading using all
              types of multiple devices, such as smartphones, PC, desktops or
              laptops, which provides you with lots of freedoms and adaptability
              to succeed in your trading.
            </p>
          </div>
          <div className="page__content-allow">
            <h2>AtosFX allows you:</h2>
            <div className="page__content-allow-flex">
              <div className="page__content-allow-flex-box"></div>
              <p>A Invest in precious metal, such as gold or silver</p>
            </div>
            <div className="page__content-allow-flex">
              <div className="page__content-allow-flex-box"></div>
              <p>Make contractual agreements</p>
            </div>
            <div className="page__content-allow-flex">
              <div className="page__content-allow-flex-box"></div>
              <p>Make contracts on natural resources</p>
            </div>
            <div className="page__content-allow-flex">
              <div className="page__content-allow-flex-box"></div>
              <p>Invest in the energy complex</p>
            </div>
          </div>
          <div className="page__content-info">
            <h2 className="page__content-info-heading">
              The platform enables you to trade with such list of assets:
            </h2>
            <div className="page__content-info-item">
              <div className="page__content-info-item-flex">
                <div className="page__content-info-item-flex-box"></div>
                <h2>Gold</h2>
              </div>
              <p>
                Recently, there has been seeing such a big jump in the volume of
                gold and trades with it. Gold is seen as a quite gainful
                commodity by a lot of investors. AtosFX provides you with the
                ability to invest in gold globally, from any point on the Earth,
                and you don’t have to make a large physical purchase of big gold
                quantities. Gold has always been a chief economic influence, and
                it will develop in the future as well. You should bear this in a
                mind just because gold is strongly tangled with many currencies.
                Gold could have a strong and considerable impact on its value.
                You have the choice to trade Gold with the US Dollar, which is
                what most people decide to do, but if you`d like you might as
                well to do the same with the Euro or another existing currency.
                To make a good trading income, trading gold has always had a lot
                of potentials.
              </p>
            </div>
            <hr />
            <div className="page__content-info-item">
              <div className="page__content-info-item-flex">
                <div className="page__content-info-item-flex-box"></div>
                <h2>Silver</h2>
              </div>
              <p>
                Worthily said that silver has a twin economic nature. First, it
                is a precious metal, but it also has the industrial usability,
                which is one of the most notifiable factors to invest in it.
                When the price of gold is hesitating, a silver, as a precious
                metal, can be experienced a positive trend. You can see the same
                with currency pairs that fluctuate on the market and could make
                a nice impact on the silver value. Silver is highly demanded
                usually, specifically in the solar arenas.
              </p>
            </div>
            <hr />
            <div className="page__content-info-item">
              <div className="page__content-info-item-flex">
                <div className="page__content-info-item-flex-box"></div>
                <h2>Oil</h2>
              </div>
              <p>
                The use of crude oil usually intends on diversification of one’s
                profile that help to detract the risk of a loss. What works best
                for this is a quite unique nature of that asset, which makes it
                stand out from equity and currency trading. Inventory factors,
                OPEC reports or climate changes are not the only factors that
                you need to think of trading oil. But, it is the second most
                traded commodity after gold and it has an impressive number of
                turnovers every day.
              </p>
            </div>
            <hr />

            <div className="page__content-info-item">
              <div className="page__content-info-item-flex">
                <div className="page__content-info-item-flex-box"></div>
                <h2>NATURAL GAS</h2>
              </div>
              <p>
                Natural gas is quite a rare resource and we are often unsure
                about its overall quantity. This asset is very hard to predict
                due to countless political circumstances, unstable climate and
                many innovations regarding its excavation and discovery. It is
                usually recommended to make a large research and develop the
                strategy before investing in gas. In that case, AtosFX has every
                day non-stop service support for its users. A team of our
                dedicated professionals handles any inquiries or issues about
                trading this and other commodities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commodities;

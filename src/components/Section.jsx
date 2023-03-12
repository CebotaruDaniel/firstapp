import React from 'react'



export const Section = () => {
	return (
<section className="bestsellers__section">
        <div className="section__text">
          <h1>Best Seller</h1>
          <h2>Product</h2>
          <p>See all colection --</p>
        </div>
        <div className="bestseller__row">
          <div className="card">
            <div className="image"><img src={require("./images/frag2.png")} alt="" /></div>
            <div className="row__text">
              <h2 className="title">Paco Rabanne Million</h2>
              <span className="price">$100</span>
            </div>
          </div>

          <div className="card">
            <div className="image"><img src={require("./images/frag3.webp")} alt="" /></div>
            <div className="row__text">
              <h2 className="title">Bleu de Chanel</h2>
              <span className="price">$150</span>
            </div>
          </div>

          <div className="card">
            <div className="image"><img src={require("./images/frag4.png")} alt="" /></div>
            <div className="row__text">
              <h2 className="title">Versace Eros</h2>
              <span className="price">$70</span>
            </div>
          </div>

          <div className="card">
            <div className="image"><img src={require("./images/frag5.png")} alt="" /></div>
            <div className="row__text">
              <h2 className="title">Tom Ford Vanilla</h2>
              <span className="price">$300</span>
            </div>
          </div>
        </div>

        <div className="bestseller__row">
          <div className="card">
            <div className="image"><img src={require("./images/7.png")} alt="" /></div>
            <div className="row__text">
              <h2 className="title">Miss Dior</h2>
              <span className="price">$120</span>
            </div>
          </div>

          <div className="card">
            <div className="image"><img src={require("./images/8.png")} alt="" /></div>
            <div className="row__text">
              <h2 className="title">Good Girl</h2>
              <span className="price">$170</span>
            </div>
          </div>

          <div className="card">
            <div className="image"><img src={require("./images/frag1.webp")} alt="" /></div>
            <div className="row__text">
              <h2 className="title">Coco Chanel</h2>
              <span className="price">$200</span>
            </div>
          </div>

          <div className="card">
            <div className="image"><img src={require("./images/9.png")} alt="" /></div>
            <div className="row__text">
              <h2 className="title">Tom Ford Lost Cherry</h2>
              <span className="price">$400</span>
            </div>
          </div>
        </div>
      </section>
	)
}
export default Section;

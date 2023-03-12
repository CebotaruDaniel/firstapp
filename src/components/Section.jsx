import React from "react";

export const Section = () => {
  return (
    <section className="bestsellers__section">
      <div className="full__section">
        <div className="bestseller__row">
				<div className="section__text">
          <h1>Best Seller</h1>
          <h2>Product</h2>
          <p>See all colection →</p>
        </div>
          <div className="image">
            <img src={require("./images/frag2.png")} alt="" />
            <div className="add__text">
              <p>Fragrance</p>
              <h1>Paco Rabanne Million</h1>
              <a className="button__section" href="">
                Discover
              </a>
            </div>
          </div>

          <div className="image">
            <img src={require("./images/frag3.webp")} alt="" />
            <div className="add__text">
              <p>Fragrance</p>
              <h1>Bleu de Chanel</h1>
              <a className="button__section" href="">
                Discover
              </a>
            </div>
          </div>

          <div className="image">
            <img src={require("./images/frag4.png")} alt="" />
            <div className="add__text">
              <p>Fragrance</p>
              <h1>Versace Eros</h1>
              <a className="button__section" href="">
                Discover
              </a>
            </div>
          </div>

          <div className="image">
            <img src={require("./images/frag5.png")} alt="" />
            <div className="add__text">
              <p>Fragrance</p>
              <h1>Tom Ford Vanilla</h1>
              <a className="button__section" href="">
                Discover
              </a>
            </div>
          </div>

          <div className="image">
            <img src={require("./images/7.png")} alt="" />
            <div className="add__text">
              <p>Fragrance</p>
              <h1>Miss Dior</h1>
              <a className="button__section" href="">
                Discover
              </a>
            </div>
          </div>
          <div className="image">
            <img src={require("./images/8.png")} alt="" />
            <div className="add__text">
              <p>Fragrance</p>
              <h1>Good Girl</h1>
              <a className="button__section" href="">
                Discover
              </a>
            </div>
          </div>
          <div className="image">
            <img src={require("./images/frag1.webp")} alt="" />
            <div className="add__text">
              <p>Fragrance</p>
              <h1>Coco Chanel</h1>
              <a className="button__section" href="">
                Discover
              </a>
            </div>
          </div>
          <div className="image">
            <img src={require("./images/9.png")} alt="" />
            <div className="add__text">
              <p>Fragrance</p>
              <h1>Tom Ford Lost Cherry</h1>
              <a className="button__section" href="">
                Discover
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section;

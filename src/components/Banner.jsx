import React from 'react'



export const Banner = () => {
	return (
    <div className="big__image">
      <div className="add__section">
        <img src={require("./images/k.avif")} alt="" />
        <div className="add__text">
          <p>Fragrance</p>
          <h1>J’ADORE PARFUM D’EAU</h1>
          <a className="button-23" href="">Discover</a>
        </div>
      </div>
      <div className="add__section">
        <img src={require("./images/pcd-cover-dior-forever3_1440_1200.webp")} alt="" />
        <div className="add__text">
          <p>Make-up</p>
          <h1>DIOR FOREVER</h1>
          <a className="button-23" href="">Discover</a>
        </div>
      </div>
    </div>
	)
}
export default Banner;

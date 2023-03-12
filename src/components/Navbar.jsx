import React, { useState, useEffect } from "react";
import '../css/main.css';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <ul className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="navbar__anchor">
        <a href="">
          <li>WOMEN'S FRAGRANCE</li>
        </a>
        <a href="">
          <li>MEN'S FRAGRANCE</li>
        </a>
        <a href="">
          <li>LA COLLECTION PRIVÉE CHRISTIAN DIOR</li>
        </a>
        <a href="">
          <li>MAKE-UP</li>
        </a>
        <a href="">
          <li>SKINCARE</li>
        </a>
        <a href="">
          <li>OUR COMMITMENTS</li>
        </a>
        <a href="">
          <li>ABOUT DIOR</li>
        </a>
      </div>

      <div className="icons">
        <a className="iconnavbar" href="">
          <img src={require("./images/search.png")} alt="" />
        </a>
        <a className="iconnavbar bigger" href="">
          <img src={require("./images/shopping-bag.png")} alt="" />
        </a>
      </div>
    </ul>
  );
}

export default Navbar;

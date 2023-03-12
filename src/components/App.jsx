import React from "react";
import Hero from "./Hero";
import Banner from "./Banner";
import Section from "./Section";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Hero />
      <Banner />
      <div className="container">
        <Section />
				<Footer/>
      </div>
    </>
  );
}

export default App;

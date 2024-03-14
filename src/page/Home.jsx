import React from "react";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import About from "../component/About";
import Card from "../component/Card";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div className=" main z-10 overflow-x-hidden  w-full flex flex-col bg-gradient-to-l  to-[#62b5ec]  from-[#bef263]">
      <Navbar />
      <Header />
      <About />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;

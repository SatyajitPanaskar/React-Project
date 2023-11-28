import React from "react";
import Navbar from "../Component/Navbar";
import Announcement from "../Component/Announcement";
import Sliders from "../Component/Sliders";
import Categories from "../Component/Categories";
import Products from "../Component/Products";
import NewsLetter from "../Component/NewsLetter";
import Footer from "../Component/Footer";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Sliders />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;

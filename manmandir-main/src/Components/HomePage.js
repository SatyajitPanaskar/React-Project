import React from "react";
import { Grid } from "";
import LogoComponent from "./LogoComponents";
import CardComponents from "./CardComponents";
import AboutYourSelf from "./AboutyourselfComponents";
import OurPurpose from "./OurPurpose";
import ContactUs from "./ContactUs";
import Navbar from "./Navbar";
import CardImageMap from "./CardImageMap";
import Login from "./login";
import Signup from "./Signup";
import HeaderComponent from "./HeaderComponents";
import FooterComponents from "./FooterComponents";
//import "../styles/Sass.scss";
import Categories from "./Categories";
import CardComponent from "./CardComponents";
import "../styles/logo.scss";
import "../styles/about.scss";
import "../styles/ourpurpose.scss";
import "../styles/contactus.scss";
import "../styles/navbar.scss";
import "../styles/login.scss";
import "../styles/signup.scss";
import "../styles/header.scss";
import "../styles/card.scss";
import "../styles/categories.scss";
import "../styles/Forgotpassward.scss";

const HomePage = () => {
  return (
    <div>
      <Grid item xs={12}>
        <Grid item xs={12}>
          {" "}
          <LogoComponent />
        </Grid>
        <Grid item xs={12}>
          {" "}
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          {" "}
          <CardComponent />
        </Grid>
        <Grid item xs={12}>
          {" "}
          <Categories />
        </Grid>
        <Grid item xs={12}>
          {" "}
          <AboutYourSelf />
        </Grid>
        <Grid item xs={12}>
          {" "}
          <OurPurpose />
        </Grid>
        <Grid item xs={12}>
          {" "}
          <ContactUs />
        </Grid>
      </Grid>
    </div>
  );
};
export default HomePage;

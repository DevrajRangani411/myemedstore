import React, { Component } from "react";
import HomeBanner from "./homeBanner.jsx";
import IntroHome from "./intro.jsx";
import TypesofApp from "./App/TypesofApp.jsx";
import FeatureListOfApp from "./Features/FeatureListOfApp.jsx";
import AppDemo from "./App/AppDemo.jsx";
import PortfolioHome from "./PortfolioHome.jsx";
import BenifitsHome from "./Benefits/BenifitsHome.jsx";
import WhyChooseUs from "./Whychoose/WhyChooseUS.jsx";
import DedicatedEmedStore from "./DedicatedEmedStore.jsx";
import ClientEmed from "./Clients/ClientEmed.jsx";
import WorldWide from "./WorldWideStore.jsx";
import Blog from "./Blog/Blogs.jsx";
import ContactUs from "./contactus.jsx";
import Post from "../Blog/Post/index.js"
// import img from "../assets/images/header-bg-main";

class Home extends Component {
  render() {
    return (
      <div className="main-container">
        <HomeBanner />
        <IntroHome />
        <TypesofApp />
        <FeatureListOfApp />
        <AppDemo />
        <PortfolioHome />
        <BenifitsHome />
        <WhyChooseUs />
        <DedicatedEmedStore />
        <ClientEmed />
        <WorldWide />
        <Blog />
        <ContactUs />
      </div>
    );
  }
}

export default Home;

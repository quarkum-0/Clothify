import React from "react";
import { SectionTitle } from "../components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <SectionTitle title="About Us" path="Home | About" />
      <div className="about-content text-center max-w-2xl mx-auto mt-5">
      <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-accent-content">We love our customers!</h2>
      <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content">
      Welcome to Quarkum Clothing & Shoes, where fashion meets innovation. Our mission is to deliver high-quality, 
      stylish clothing that empowers individuals to express their unique identities. With a commitment to 
      craftsmanship and sustainability, we curate collections that blend timeless elegance with contemporary trends. 
      Join us on a journey to discover fashion that’s as dynamic and diverse as you.
      </p>
      <Link to="/contact" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-5">Contact Us</Link>
      </div>
    </div>
  );
};

export default About;

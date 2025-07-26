import React from 'react';
import './Counter.css';
import { FaTiktok } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Counter = () => {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">Portfolio</h1>
        <ul>
          <li className="active" style={{ color: '#7cf03d' }}>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Service</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="bars-animation">
        <div className="bar" style={{ "--i": 6 }}></div>
        <div className="bar" style={{ "--i": 5 }}></div>
        <div className="bar" style={{ "--i": 4 }}></div>
        <div className="bar" style={{ "--i": 3 }}></div>
        <div className="bar" style={{ "--i": 2 }}></div>
        <div className="bar" style={{ "--i": 1 }}></div>
      </div>

      <section className="home">
        <div className="home-info">
          <h1>Azizbek Sultanov</h1>
          <h2>I'm a{" "}
            <span style={{ "--i": 4 }} data-text="Frontend Developer">Frontend Developer</span>
            <span style={{ "--i": 3 }} data-text="Youtuber">Youtuber</span>
            <span style={{ "--i": 2 }} data-text="Blogger">Blogger</span>
            <span style={{ "--i": 1 }} data-text="Designer">Designer</span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus voluptates, 
            voluptatum magnam aut maxime ducimus enim a numquam reiciendis eum maiores 
            iure at tempora minima soluta facilis nemo error natus.
          </p>

          <div className="btn-sci">
            <a href="#" className="btn">Download CV</a>
            <div className="sci">
              <a href="https://www.instagram.com"><IoLogoInstagram /></a>
              <a href="https://t.me/@aziz_khan_777"><FaTelegram /></a>
              <a href="https://www.youtube.com"><FaYoutube /></a>
              <a href="https://www.tiktok.com"><FaTiktok /></a>
            </div>
          </div>
        </div>

        <div className="home-img">
          <div className="img-box">
            <div className="img-item">
                {/* <img src="src/assets/rasm.jpg" alt="" /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counter;



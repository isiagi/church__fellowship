import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <div className="parent">
      <div className="footer__container mxWidt">
        <div className="footer__contain">
          <div className="footer__wrapper">
            <div>
              <h3 style={{fontSize: "1.4rem"}}>Mutiya Wednesday Fellow</h3>
            </div>
            <div className="footer__info">
              lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
              amet, consectetur adip lorem ipsum dolor sit amet, consectetur
              adip v.
            </div>
            <div>
              <BsFacebook style={{ fontSize: "1.8rem", color: "#25AFC2" }} />
              <BsInstagram
                style={{
                  fontSize: "1.8rem",
                  marginLeft: "1rem",
                  color: "#25AFC2",
                }}
              />
              <AiFillTwitterCircle
                style={{
                  fontSize: "1.8rem",
                  marginLeft: "1rem",
                  color: "#25AFC2",
                }}
              />
            </div>
          </div>
          <div className="footer__links">
            <div>
              <h3 style={{fontSize: "1.4rem"}}>Quick Link</h3>
            </div>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__links">
            <div>
              <h3 style={{fontSize: "1.4rem"}}>Events</h3>
            </div>
            <div>
              <ul>
                <li>
                  <Link to="/wire">Batipsming</Link>
                </li>
                <li>
                  <Link to="/wire">Batipsming</Link>
                </li>
                <li>
                  <Link to="/wire">Batipsming</Link>
                </li>
                <li>
                  <Link to="/soft">X-Mas</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__links">
            <div>
              <h3 style={{fontSize: "1.4rem"}}>Sermons</h3>
            </div>
            <div>
              <ul>
                <li>Life Change</li>
                <li>With You</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

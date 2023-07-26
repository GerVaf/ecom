import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { HiOutlineLocationMarker } from "../../../node_modules/react-icons/hi";
import {
  AiOutlinePhone,
  AiOutlineLink,
} from "../../../node_modules/react-icons/ai";
import { MdAlternateEmail } from "../../../node_modules/react-icons/md";
import { GoSignIn } from "../../../node_modules/react-icons/go";
import { BsPeople } from "../../../node_modules/react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="foot">
        <div className="logo">
          <img src={logo} alt="" />
          <p>amazon</p>
        </div>
        <div className="contact">
          <h2>Contact Us</h2>
          <div className="location">
            <HiOutlineLocationMarker />
            <p>Tamwe /MyitTharNyount /4th Street</p>
          </div>
          <div className="phone">
            <AiOutlinePhone />
            <p>09-425212523</p>
          </div>
          <div className="email">
            <MdAlternateEmail />
            thantzinmin668@gmail.com
          </div>
        </div>

        <div className="acc">
          <h2>Account</h2>
          <div className="sign-in">
            <GoSignIn />
            Sign-in
          </div>
        </div>
        <div className="company">
          <h2>Company</h2>
          <div className="people">
            <BsPeople />
            <p>About Us</p>
          </div>
        </div>
        <div className="resource">
          <h2>Resoureces</h2>
          <div className="link">
            <AiOutlineLink />
            <p>Safety Privacy & Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

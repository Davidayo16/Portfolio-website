import React from "react";
import {
  FaFacebook,
  FaFacebookSquare,
  FaGithub,
  FaGithubSquare,
  FaInstagram,
  FaLinkedinIn,
  FaSignInAlt,
  FaSignOutAlt,
  FaTimes,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="app-social">
      <div className="fa-cont">
        <FaLinkedinIn className="fa" />
      </div>
      <div className="fa-cont">
        <FaTwitter className="fa" />
      </div>

      <div className="fa-cont">
        <FaGithub className="fa" />
      </div>
    </div>
  );
};

export default SocialMedia;

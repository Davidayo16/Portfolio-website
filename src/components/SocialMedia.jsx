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
      <a
        href="https://www.twitter.com/dayvidayo?t=Ovwfw-vH1LuZe_1tUt03Fg&s=09"
        target="_blank"
        className="fa-cont"
      >
        <FaTwitter className="fa" />
      </a>

      <a
        className="fa-cont cont-2"
        href="https://www.linkedin.com/in/david-odimayo-70727427b"
        target="_blank"
      >
        <FaLinkedinIn className="fa" />
      </a>

      <a
        className="fa-cont"
        href="https://www.facebook.com/profile.php?id=100083591194469"
        target="_blank"
      >
        <FaFacebook className="fa" />
      </a>
    </div>
  );
};

export default SocialMedia;

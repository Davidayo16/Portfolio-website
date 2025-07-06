import React from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

const SocialMedia = () => {
  return (
    <div
      className="app-social"
      style={{ gap: "20px", padding: "1.2rem 2.5rem" }}
    >
      <motion.a
        href="https://www.twitter.com/dayvidayo?t=Ovwfw-vH1LuZe_1tUt03Fg&s=09"
        target="_blank"
        rel="noopener noreferrer"
        className="fa-cont twitter-link"
        whileHover={{
          scale: 1.25,
          boxShadow: "0 0 20px var(--color-primary)",
          rotate: 15,
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 30 30"
          style={{ fill: "var(--color-primary)" }}
        >
          <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
        </svg>
        <Tooltip
          anchorSelect=".twitter-link"
          place="top"
          className="tooltip"
          style={{
            fontSize: "0.9rem",
            backgroundColor: "var(--color-primary)",
          }}
        >
          Follow on X
        </Tooltip>
      </motion.a>

      <motion.a
        className="fa-cont cont-2 linkedin-link"
        href="https://www.linkedin.com/in/david-odimayo-70727427b"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.25,
          boxShadow: "0 0 20px var(--color-primary)",
          rotate: 15,
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <FaLinkedinIn
          className="fa"
          style={{ color: "var(--color-primary)", fontSize: "1.3rem" }}
        />
        <Tooltip
          anchorSelect=".linkedin-link"
          place="top"
          className="tooltip"
          style={{
            fontSize: "0.9rem",
            backgroundColor: "var(--color-primary)",
          }}
        >
          Connect on LinkedIn
        </Tooltip>
      </motion.a>

      <motion.a
        className="fa-cont facebook-link"
        href="https://www.facebook.com/profile.php?id=100083591194469"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.25,
          boxShadow: "0 0 20px var(--color-primary)",
          rotate: 15,
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <FaFacebook
          className="fa"
          style={{ color: "var(--color-primary)", fontSize: "1.3rem" }}
        />
        <Tooltip
          anchorSelect=".facebook-link"
          place="top"
          className="tooltip"
          style={{
            fontSize: "0.9rem",
            backgroundColor: "var(--color-primary)",
          }}
        >
          Follow on Facebook
        </Tooltip>
      </motion.a>
    </div>
  );
};

export default SocialMedia;

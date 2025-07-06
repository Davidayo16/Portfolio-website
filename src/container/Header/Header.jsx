import React, { useEffect } from "react";
import "./Header.css";
import { easeInOut, motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import { FaCog, FaLightbulb, FaMoon, FaTimes } from "react-icons/fa";
import SocialMedia from "../../components/SocialMedia";

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: easeInOut,
      },
    },
  };

  const items = [
    {
      id: 1,
      name: "theme1",
      color: "rgb(25, 154, 177)",
    },
    {
      id: 2,
      name: "theme2",
      color: "rgb(233, 147, 67)",
    },
    {
      id: 3,
      name: "theme3",
      color: "rgb(111, 44, 117)",
    },
    {
      id: 4,
      name: "theme4",
      color: "rgb(102, 161, 158)",
    },
  ];

  const [background, setBackground] = React.useState(
    localStorage.getItem("background")
      ? JSON.parse(localStorage.getItem("background"))
      : "rgb(233, 147, 67)"
  );
  const [theme, setTheme] = React.useState(
    localStorage.getItem("themee")
      ? JSON.parse(localStorage.getItem("themee"))
      : "dark"
  );
  const [active, setActive] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 1000);
  }, []);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  React.useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("themee", JSON.stringify(theme));
  }, [theme]);

  const handleBackground = (color) => {
    setBackground(color);
  };

  const closeStyle = () => {
    setActive(false);
  };

  const openStyle = () => {
    setActive(true);
  };

  React.useEffect(() => {
    document.documentElement.style.setProperty("--color-primary", background);
    localStorage.setItem("background", JSON.stringify(background));
  }, [background]);

  React.useEffect(() => {
    const check = (e) => {
      if (active && ref.current && !ref.current.contains(e.target)) {
        closeStyle();
      }
    };
    document.addEventListener("mousedown", check);
    return () => {
      document.removeEventListener("mousedown", check);
    };
  }, [active]);

  window.onscroll = () => {
    setActive(false);
  };

  return (
    <>
      <div
        className="header-wrapper py-5"
        id="home"
        style={{
          position: "relative",
          overflow: "hidden",
          background: `
            linear-gradient(145deg, var(--color-background2), var(--color-background)),
            linear-gradient(45deg, rgba(26, 131, 150, 0.1) 0%, rgba(0, 229, 255, 0.1) 100%)
          `,
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `
              radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.15) 2%, transparent 4%),
              radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.15) 2%, transparent 4%)
            `,
            opacity: 0.3,
            pointerEvents: "none",
          }}
        />
        <div className="container-xxl">
          <div className={active ? "remove-settings settings" : "settings"}>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <FaCog onClick={() => openStyle()} className="items-style" />
            </motion.div>
            {theme === "light" ? (
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FaMoon
                  className="mb-0 body-style"
                  onClick={() => handleTheme()}
                />
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FaLightbulb
                  className="mb-0 body-style"
                  onClick={() => handleTheme()}
                />
              </motion.div>
            )}
          </div>
          <div className={active ? "activeStyle back" : "back"} ref={ref}>
            <div className="d-flex justify-content-between mb-3 style-top">
              <h5 style={{ color: "var(--color-dark)", fontWeight: 600 }}>
                Style Switcher
              </h5>
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FaTimes
                  className="style-times"
                  onClick={() => closeStyle()}
                  style={{ color: "var(--color-dark)" }}
                />
              </motion.div>
            </div>
            <div className="row style-cont">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  className={active ? "activeStyle col-3 mt-2" : "col-3 mt-2"}
                  onClick={() => handleBackground(item.color)}
                  style={{
                    backgroundColor: item.color,
                    borderRadius: "12px",
                    cursor: "pointer",
                    boxShadow: "0 4px 10px var(--color-light)",
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 15px var(--color-primary)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </div>
          <div className="d-flex flex-lg-row flex-column justify-content-center header-container w-100 gap-4">
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.9, ease: easeInOut }}
              className="header-info"
            >
              <div className="app-header-info">
                <div className="d-flex gap-3 align-items-center bg-tmp">
                  <div className="dim">
                    <span style={{ fontSize: "2.5rem" }}>👋</span>
                  </div>
                  <div>
                    <span
                      className="dim"
                      style={{ fontSize: "1.2rem", fontWeight: 500 }}
                    >
                      Hello, I am
                    </span>
                    <h1
                      className="mb-0 mt-1"
                      style={{
                        color: "var(--color-primary)",
                        fontWeight: 700,
                        fontSize: "2.5rem",
                      }}
                    >
                      David
                    </h1>
                  </div>
                </div>
                <div className="d-flex gap-2 tag-tmp mt-4 align-items-center justify-content-center flex-column">
                  <p
                    className="dim mb-1 bold"
                    style={{ fontSize: "1.1rem", fontWeight: 600 }}
                  >
                    Web Developer
                  </p>
                  <p
                    className="dim mb-1 bold"
                    style={{ fontSize: "1.1rem", fontWeight: 600 }}
                  >
                    Software Engineer
                  </p>
                </div>
                <motion.a
                  href="https://drive.google.com/file/d/1WmJR1T3n26VJ8aoAl074w_usKbI8Klwm/view?usp=drive_link"
                  download
                  className="cv"
                  style={{
                    display: "inline-block",
                    marginTop: "1.5rem",
                    padding: "12px 24px",
                    background: "var(--color-primary)",
                    color: "var(--color-white)",
                    borderRadius: "12px",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                    boxShadow: "0 4px 12px var(--color-light)",
                    textAlign: "center",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px var(--color-primary)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  Download CV
                </motion.a>
                <div className="mt-4">
                  <SocialMedia />
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{
                duration: 1,
                ease: easeInOut,
                delayChildren: 0.9,
              }}
              className="header-img"
            >
              <motion.img
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                src="/images/user.png"
                className="user-img"
                style={{
                  borderRadius: "20px",
                  boxShadow: "0 8px 20px var(--color-light)",
                }}
              />
              <motion.div
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 1, ease: easeInOut }}
                className="overlay-circle"
                style={{
                  background: "rgba(26, 131, 150, 0.1)",
                  boxShadow: "0 4px 15px var(--color-light)",
                }}
              />
            </motion.div>
            <motion.div
              variants={scaleVariants}
              whileInView={scaleVariants.whileInView}
              className="header-circle"
            >
              {[
                "/images/tailwindcss.svg",
                "/images/react.svg",
                "/images/python.svg",
              ].map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={image}
                    className="img-fluid"
                    style={{
                      borderRadius: "10px",
                      boxShadow: "0 4px 10px var(--color-light)",
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

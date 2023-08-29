import React, { useEffect } from "react";
import "./Header.css";
import { easeInOut, motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import {
  FaCog,
  FaHackerrank,
  FaLightbulb,
  FaMoon,
  FaScrewdriver,
  FaSun,
  FaTimes,
} from "react-icons/fa";
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
      // Fourth item
      id: 1,
      name: "theme1",
      color: "rgb(25, 154, 177)",
    },
    {
      // Fourth item
      id: 4,
      name: "theme2",
      color: "rgb(233, 147, 67)",
    },
    {
      // Fourth item
      id: 4,
      name: "theme3",
      color: "rgb(111, 44, 117)",
    },
    {
      // Fourth item
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
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
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
      <div className="header-wrapper py-3" id="home">
        <div className="container-xxl">
          <div className={active ? "remove-settings settings" : "settings"}>
            <FaCog onClick={() => openStyle()} className="items-style" />
            {theme === "light" ? (
              <FaMoon
                className="mb-0 body-style"
                onClick={() => handleTheme()}
              />
            ) : (
              <FaLightbulb
                className="mb-0 body-style"
                onClick={() => handleTheme()}
              />
            )}
          </div>
          <div className={active ? "activeStyle back" : "back"} ref={ref}>
            <div className="d-flex justify-content-between mb-2 style-top ">
              <h5>Style switcher</h5>
              <FaTimes className="style-times" onClick={() => closeStyle()} />
            </div>
            <div className="row style-cont">
              {items.map((item) => {
                return (
                  <div
                    className={active ? "activeStyle col-3 mt-2" : "col-3 mt-2"}
                    onClick={() => handleBackground(item.color)}
                    style={{ backgroundColor: `${item.color}` }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="d-flex flex-lg-row flex-column  justify-content-center header-container w-100 i gap-4">
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.9 }}
              className="header-info"
            >
              <div className="app-header-info">
                <div className="d-flex gap-2 align-items-center bg-tmp">
                  <div className="dim">
                    <span style={{ fontSize: "2rem" }}>👋</span>
                  </div>
                  <div>
                    <span className="dim">Hello, I am</span>
                    <h1
                      className="mb-0 mt-0"
                      style={{ color: "var(--color-primary)" }}
                    >
                      David
                    </h1>
                  </div>
                </div>
                <div className="d-flex gap-2 tag-tmp mt-4 align-items-center justify-content-center flex-column">
                  <p className="dim mb-0 bold">Web Developer</p>
                  <p className="dim mb-0 bold">Software Engineer</p>
                </div>
              </div>
              {/* <a className="cv">download cv</a> */}
              <SocialMedia />
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
                variant={scaleVariants}
                whileInView={scaleVariants.whileInView}
                src="/images/user.png"
                className=" user-img"
              />

              <motion.div
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 1, ease: easeInOut }}
                className="overlay-circle"
              />
            </motion.div>
            <motion.div
              variant={scaleVariants}
              whileInView={scaleVariants.whileInView}
              className="header-circle"
            >
              {[
                "/images/tailwindcss.svg",
                "/images/react.svg",
                "/images/python.svg",
              ].map((image) => {
                return (
                  <div>
                    <img src={image} className="img-fluid " />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

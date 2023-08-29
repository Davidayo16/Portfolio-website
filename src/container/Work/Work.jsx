import React from "react";
import "./Work.css";
import { easeInOut, motion } from "framer-motion";
import { FaDice, FaEye, FaGithub, FaShoppingCart } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
const Work = () => {
  const itemss = [
    {
      // Fourth item
      id: 3,
      name: "Social Media Web App",
      opacity: "opacity",
      direction: "x",
      color: "rgb(25, 154, 177)",
      image: "/images/fv.png",
      link: "https://facebook-clone-saxt.onrender.com/",
      tag: ["Next Js", "React Js"],
      github: "",
      description: `Full-fledged chat application. Sleek, minimalist interface.
       Real-time messaging.`,
    },
    {
      // Fourth item
      id: 1,
      name: "VivaMarket (E-commerce Platform)",
      opacity: "opacity",
      direction: "x",
      image: "/images/ec.png",
      tag: ["React Js", "Node Js"],
      link: "https://amazon-clone-ld34.onrender.com/",
      github: "",
      description: `Revolutionary eCommerce website offering seamless online
                      shopping.`,
    },
    {
      // Fourth item
      id: 2,
      name: "JobQuest",
      opacity: "opacity",
      direction: "y",
      color: "rgb(25, 154, 177)",
      image: "/images/jb.png",
      tag: ["React Js", "Node Js"],
      link: "https://job-app-fvsq.onrender.com/",
      github: "",
      description: "Innovative job app revolutionizing the hiring landscape",
    },

    {
      // Fourth item
      id: 4,
      name: "Task Tracker App",
      opacity: "opacity",
      direction: "y",
      color: "rgb(25, 154, 177)",
      image: "/images/tst.png",
      tag: ["Javascript", "React Js"],
      link: "https://task-app-ywx9.onrender.com",
      github: "",
      description: `User-friendly to-do app designed for efficient task
                      management and productivity.`,
    },
  ];
  const [active, setActive] = React.useState("All");
  const [items, setItems] = React.useState(itemss);

  const handleFilter = (item) => {
    setActive(item);
    if (item === "All") {
      setItems(itemss);
      return;
    }
    setItems(itemss.filter((itemm) => itemm.tag.includes(item)));
  };

  return (
    <>
      <section className="portfolio-wrapper py-3" id="work">
        <div className="container">
          <div className="d-flex align-items center flex-column">
            <h1 className="head-text">
              My Creative <span>Portfolio</span> Section
            </h1>
            <div className="work-filter d-flex align-items-center flex-wrap gap-4 justify-content-center mt-5 ">
              {["All", "React Js", "Javascript", "Node Js", "Next Js"].map(
                (item, key) => {
                  return (
                    <div
                      className="work-filter-item"
                      style={
                        active === item
                          ? {
                              backgroundColor: "var(--color-primary)",
                              color: "white",
                            }
                          : {}
                      }
                      onClick={() => handleFilter(item)}
                    >
                      {item}
                    </div>
                  );
                }
              )}
            </div>
            <div className=" d-flex align-items-center justify-content-center mt-5">
              <div className="row g-5 align-items-center justify-content center w-100 about-item-cont">
                {items.map((item) => {
                  const b = item.direction;
                  const animationProperties = {
                    opacity: [0, 1],
                    y: [100, 0],
                  };
                  return (
                    <motion.div
                      className="col-lg-4 col-md-4 col-sm-6 "
                      whileInView={animationProperties}
                      // whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5, type: "tween" }}
                    >
                      <div className="work-item">
                        <div className="work-img-cont">
                          <img className="img-fluid w-100" src={item.image} />
                          <div className="work-overlay">
                            <div className="d-flex action-icon-cont">
                              {item.link && (
                                <a
                                  href={item.link}
                                  className="action-icon view-link"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  data-tooltip-delay-show={0}
                                >
                                  <FaEye />

                                  {
                                    <Tooltip
                                      anchorSelect=".view-link"
                                      place="top"
                                      className="tooltip"
                                    >
                                      View live site
                                    </Tooltip>
                                  }
                                </a>
                              )}
                              <a
                                href="https://github.com/Davidayo16"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="action-icon view-github"
                              >
                                <FaGithub />
                                {
                                  <Tooltip
                                    anchorSelect=".view-github"
                                    place="top"
                                    className="tooltip"
                                  >
                                    View in Github
                                  </Tooltip>
                                }
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="work-link mt-3 text-center">
                          <h4 className="mt-3 bold">{item.name}</h4>
                        </div>

                        <p className="mt-3">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;

import React from "react";
import "./Skills.css";
import { easeInOut, motion } from "framer-motion";
const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "HTML",
      image: "/images/html.svg",
    },
    {
      id: 2,
      name: "CSS",
      image: "/images/css.svg",
    },
    {
      id: 3,
      name: "JavaScript",
      image: "/images/javascript.svg",
    },
    {
      id: 4,
      name: "Bootstrap",
      image: "/images/bootstrap.svg",
    },
    {
      id: 5,
      name: "React Js",
      image: "/images/react.svg",
    },
    {
      id: 5,
      name: "Angular",
      image: "/images/angular.svg",
    },
    {
      id: 6,
      name: "Python",
      image: "/images/python.svg",
    },
    {
      id: 7,
      name: "Typescript",
      image: "/images/typescript.svg",
    },
    {
      id: 7,
      name: "Redux",
      image: "/images/redux.svg",
    },
    {
      id: 8,
      name: "Git",
      image: "/images/git.svg",
    },
    {
      id: 9,
      name: "Tailwindcss",
      image: "/images/tailwindcss.svg",
    },
    {
      id: 10,
      name: "SASS",
      image: "/images/sass.svg",
    },
    {
      id: 11,
      name: "Express Js",
      image: "/images/express.svg",
    },
    {
      id: 12,
      name: "Node Js",
      image: "/images/node.svg",
    },
    {
      id: 13,
      name: "Next Js",
      image: "/images/next.svg",
    },
    {
      id: 14,
      name: "React Native",
      image: "/images/react.svg",
    },
    {
      id: 14,
      name: "AWS",
      image: "/images/aws.svg",
    },
  ];

  return (
    <>
      <div className="skils-wrapper py-3" id="skills">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <h1 className="head-text mt-10">
                Skills &<span> Experience</span>
              </h1>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center  mt-0">
            <div className="row  r">
              <div className="col-lg-6 col-12">
                <h2 className="bold mb-3 skill-text">Skills</h2>
                <div className="d-flex g-3 flex-wrap y align-items-center">
                  {skills?.map((skill) => {
                    return (
                      <div className="col-3  b ">
                        <motion.div
                          className="skills-img-cont d-flex align-items-center justify-content-center flex-column"
                          whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                          transition={{ duration: 0.9, ease: easeInOut }}
                        >
                          <div className="skill-over"></div>
                          <img src={skill.image} className="img-fluid" />
                          <h5 className="bold mt-2 text-center skill-name">
                            {skill.name}
                          </h5>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <motion.div
                className="col-lg-6 col-12 experience"
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, ease: easeInOut }}
              >
                <div className="row">
                  <div className="col-12 col-md-6">
                    <h2 className="bold mb-4 experience-text">Experience</h2>
                    <div className="d-flex gap-3">
                      <h5 className="dim">2019-2020</h5>
                      <div>
                        <h4 className="bold dim">Software Developer</h4>
                        <p className="dim">ALX-NG</p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <h5 className="dim">2020-2021</h5>
                      <div>
                        <h4 className="bold dim">Frontend Developer</h4>
                        <p className="dim">ASUSU</p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <h5 className="dim"> 2021-2022</h5>
                      <div>
                        <h4 className="bold dim">Fullstack Developer</h4>
                        <p className="dim">Cashbox Finance</p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <h5 className="dim"> 2022-2023</h5>
                      <div>
                        <h4 className="bold dim">Software Developer</h4>
                        <p className="dim">Ajaokuta Steel Company</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <h2 className="bold mb-4 education-text">Education</h2>
                    <div className="d-flex w-100">
                      <div>
                        <h6 className="bold dim">
                          B.Eng in Electrical/Computer Engineering
                        </h6>
                        <p className="bold dim">
                          Federal University of Technology, Minna, Nigeria
                        </p>
                      </div>
                      <p className="dim">2016-2022</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

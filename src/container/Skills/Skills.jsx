import React from "react";
import "./Skills.css";
import { easeInOut, motion } from "framer-motion";
const Skills = () => {
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
                  <div className="col-3  b">
                    <motion.div
                      className="skills-img-cont"
                      whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                      transition={{ duration: 0.9, ease: easeInOut }}
                    >
                      <div className="skill-over"></div>
                      <img src="/images/html.svg" className="img-fluid" />
                    </motion.div>
                  </div>
                  <div className="col-3  b">
                    <motion.div
                      className="skills-img-cont"
                      whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                      transition={{ duration: 0.9, ease: easeInOut }}
                    >
                      <img src="/images/css.svg" className="img-fluid" />
                    </motion.div>
                  </div>
                  <div className="col-3  b">
                    <motion.div
                      className="skills-img-cont"
                      whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                      transition={{ duration: 0.9, ease: easeInOut }}
                    >
                      <img src="/images/bootstrap.svg" className="img-fluid" />
                    </motion.div>
                  </div>
                  <div className="col-3 b">
                    <motion.div
                      className="skills-img-cont"
                      whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                      transition={{ duration: 0.9, ease: easeInOut }}
                    >
                      <img src="/images/javascript.svg" className="img-fluid" />
                    </motion.div>
                  </div>
                  <div className="col-3 b">
                    <motion.div
                      className="skills-img-cont"
                      whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                      transition={{ duration: 0.9, ease: easeInOut }}
                    >
                      <img src="/images/react.svg" className="img-fluid" />
                    </motion.div>
                  </div>
                  <div className="col-3  b">
                    <motion.div
                      className="skills-img-cont"
                      whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                      transition={{ duration: 0.9, ease: easeInOut }}
                    >
                      <img src="/images/python.svg" className="img-fluid" />
                    </motion.div>
                  </div>
                  <div className="col-3  b">
                    <motion.div
                      className="skills-img-cont"
                      whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                      transition={{ duration: 0.9, ease: easeInOut }}
                    >
                      <img src="/images/git.svg" className="img-fluid" />
                    </motion.div>
                  </div>
                  <div className="col-3  b">
                    <motion.div
                      className="skills-img-cont"
                      whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                      transition={{ duration: 0.9, ease: easeInOut }}
                    >
                      <img src="/images/redux.svg" className="img-fluid" />
                    </motion.div>
                  </div>
                  <div className="col-3  b">
                    <motion.div
                      className="skills-img-cont"
                      whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                      transition={{ duration: 0.9, ease: easeInOut }}
                    >
                      <img
                        src="/images/tailwindcss.svg"
                        className="img-fluid"
                      />
                    </motion.div>
                  </div>
                  <div className="col-3 b">
                    <motion.div
                      className="skills-img-cont"
                      whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                      transition={{ duration: 0.9, ease: easeInOut }}
                    >
                      <img src="/images/sass.svg" className="img-fluid" />
                    </motion.div>
                  </div>
                  <div className="col-3 b">
                    <motion.div
                      className="skills-img-cont"
                      whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                      transition={{ duration: 0.9, ease: easeInOut }}
                    >
                      <img src="/images/express.svg" className="img-fluid" />
                    </motion.div>
                  </div>
                  <div className="col-3 b">
                    <motion.div
                      className="skills-img-cont"
                      whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                      transition={{ duration: 0.9, ease: easeInOut }}
                    >
                      <img src="/images/next.svg" className="img-fluid" />
                    </motion.div>
                  </div>

                  <div className="col-3 b">
                    <motion.div
                      className="skills-img-cont"
                      whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                      transition={{ duration: 0.9, ease: easeInOut }}
                    >
                      <img src="/images/node.svg" className="img-fluid" />
                    </motion.div>
                  </div>
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
                      <h5 className="dim">2022</h5>
                      <div>
                        <h4 className="bold dim">Junior Frontend Developer</h4>
                        <p className="dim">ASUSU</p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <h5 className="dim"> 2020</h5>
                      <div>
                        <h4 className="bold dim">
                          Telecommunication Engineer•
                        </h4>
                        <p className="dim">Ajaokuta Steel Company</p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <h5 className="dim">2020</h5>
                      <div>
                        <h4 className="bold dim">Software engineer</h4>
                        <p className="dim">2020-Till Date</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <h2 className="bold mb-4 education-text">Education</h2>
                    <div className="d-flex w-100">
                      <div>
                        <h6 className="bold dim">
                          Electrical/Electronics Engineering
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

import React from "react";
import "./About.css";
import { easeInOut, motion } from "framer-motion";
const About = () => {
  return (
    <>
      <section className="about-wrapper py-3 mt-0" id="about">
        <div className="container">
          <div className="d-flex align-items center flex-column">
            <h1 className="head-text">
              Having a <span>Strong Development </span> Process <br /> is
              Essential for
              <span> Achieving Success</span> in Business.
            </h1>
            <div className=" d-flex align-items-center justify-content-center mt-4">
              <div className="row g-4 g align-items-center justify-content center W-100 about-item-cont">
                <motion.div
                  className="col-lg-6 col-md-6 col-sm-6px-0"
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.7, type: "tween", ease: easeInOut }}
                >
                  <div className=" about-item ">
                    <div className="about-img-cont w-100">
                      <img className="img-fluid w-100" src="/images/wd.jpg" />
                    </div>
                    <h6 className="mt-3 bold">Web Development</h6>
                    <p className="mt-3 bold ">
                      As a skilled web developer, I excel in crafting stunning
                      and intuitive websites that seamlessly blend cutting-edge
                      design with robust functionality, ensuring an exceptional
                      user experience. My passion for web development drives me
                      to deliver impactful solutions that exceed client
                      expectations and elevate online presence.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="col-lg-6 col-md-6 col-sm-12"
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.7, type: "tween", ease: easeInOut }}
                >
                  <div className="about-item">
                    <div className="about-img-cont">
                      <img className="img-fluid" src="/images/fd.jpg" />
                    </div>
                    <h6 className="mt-3 bold">Frontend Development</h6>
                    <p className="mt-3 bold">
                      As a proficient frontend developer, I possess a keen eye
                      for design and a deep understanding of user experience
                      principles. Through my expertise in HTML, CSS, and
                      JavaScript, I create visually appealing and responsive web
                      interfaces that captivate users and enhance their
                      interaction with websites.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="col-lg-6 col-md-6 col-sm-12"
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.7, type: "tween", ease: easeInOut }}
                >
                  <div className="about-item">
                    <div className="about-img-cont">
                      <img className="img-fluid" src="/images/bd.jpg" />
                    </div>
                    <h6 className="mt-3 bold">Backend Development</h6>
                    <p className="mt-3 bold ">
                      With a strong backend development background, I excel in
                      building robust and scalable web applications. Leveraging
                      my skills in languages such as Python, Node.js, and
                      databases like MySQL and MongoDB, I develop efficient
                      server-side logic, APIs, and database integrations,
                      ensuring seamless functionality and optimal performance.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="col-lg-6 col-md-6 col-sm-12 "
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.7, type: "tween", ease: easeInOut }}
                >
                  <div className="about-item">
                    <div className="about-img-cont">
                      <img className="img-fluid" src="/images/mern.jpg" />
                    </div>
                    <h6 className="mt-3 bold">MERN Stack</h6>
                    <p className="mt-3 bold">
                      As a skilled MERN stack developer, I specialize in
                      creating full-stack web applications using MongoDB,
                      Express.js, React, and Node.js. With proficiency in both
                      frontend and backend technologies, I deliver end-to-end
                      solutions that combine intuitive user interfaces with
                      powerful server-side functionalities.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

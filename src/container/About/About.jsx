import React, { useState } from "react";
import { motion, easeInOut } from "framer-motion";

const About = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCard = (cardId) => {
    setFlippedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const services = [
    {
      id: 1,
      title: "Web Development",
      shortDesc:
        "Crafting stunning and intuitive websites with cutting-edge design and robust functionality.",
      fullDesc:
        "As a skilled web developer, I excel in crafting stunning and intuitive websites that seamlessly blend cutting-edge design with robust functionality, ensuring an exceptional user experience. My passion for web development drives me to deliver impactful solutions that exceed client expectations and elevate online presence.",
      icon: "🌐",
    },
    {
      id: 2,
      title: "Frontend Development",
      shortDesc:
        "Creating visually appealing and responsive web interfaces that captivate users.",
      fullDesc:
        "As a proficient frontend developer, I possess a keen eye for design and a deep understanding of user experience principles. Through my expertise in HTML, CSS, and JavaScript, I create visually appealing and responsive web interfaces that captivate users and enhance their interaction with websites.",
      icon: "⚡",
    },
    {
      id: 3,
      title: "Backend Development",
      shortDesc:
        "Building robust and scalable web applications with efficient server-side logic.",
      fullDesc:
        "With a strong backend development background, I excel in building robust and scalable web applications. Leveraging my skills in languages such as Python, Node.js, and databases like MySQL and MongoDB, I develop efficient server-side logic, APIs, and database integrations, ensuring seamless functionality and optimal performance.",
      icon: "🚀",
    },
    {
      id: 4,
      title: "Blockchain Development",
      shortDesc:
        "Building secure and decentralized applications using blockchain technology.",
      fullDesc:
        "As an expert blockchain developer, I specialize in creating secure, decentralized applications using technologies like Ethereum, Solidity, and Web3.js. I design and deploy smart contracts, develop decentralized finance (DeFi) platforms, and build innovative solutions that leverage the power of blockchain for transparency and trust.",
      icon: "🔗",
    },
  ];

  return (
    <>
      <section className="about-wrapper py-5 mt-0" id="about">
        <div className="container">
          <div className="d-flex align-items-center flex-column">
            {/* Header */}
            <motion.h1
              className="head-text text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeInOut }}
              viewport={{ once: true }}
              style={{
                color: "var(--color-dark)",
                fontWeight: 700,
                fontFamily: "Poppins, sans-serif",
                fontSize: "2.2rem",
                lineHeight: "1.3",
              }}
            >
              Having a <span style={{ color: "var(--color-primary)" }}>Strong Development </span> Process <br /> is
              Essential for
              <span style={{ color: "var(--color-primary)" }}> Achieving Success</span> in Business.
            </motion.h1>

            {/* Cards Grid */}
            <div className="d-flex align-items-center justify-content-center mt-4 w-100">
              <div className="row g-5 align-items-center justify-content-center w-100 about-item-cont">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="col-lg-6 col-md-6 col-sm-12 px-4 aboutt"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.2,
                      ease: easeInOut,
                    }}
                    viewport={{ once: true }}
                  >
                    {/* Card Container with Flip Effect */}
                    <div
                      className="position-relative w-100"
                      style={{
                        height: "480px",
                        perspective: "1200px",
                      }}
                    >
                      <motion.div
                        className="position-absolute w-100 h-100"
                        style={{
                          transformStyle: "preserve-3d",
                          cursor: "pointer",
                        }}
                        whileHover={{ scale: 1.02 }}
                        animate={{
                          rotateY: flippedCards[service.id] ? 180 : 0,
                        }}
                        transition={{
                          duration: 0.9,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        onClick={() => toggleCard(service.id)}
                      >
                        {/* Front Side */}
                        <div
                          className="about-item position-absolute w-100 h-100 d-flex flex-column"
                          style={{
                            backfaceVisibility: "hidden",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            borderRadius: "28px",
                            padding: "48px",
                            background: `
                              linear-gradient(145deg, var(--color-background2), var(--color-background)),
                              linear-gradient(45deg, rgba(26, 131, 150, 0.25) 0%, rgba(0, 229, 255, 0.25) 100%)
                            `,
                            backdropFilter: "blur(25px)",
                            boxShadow: `
                              0 12px 35px var(--color-light),
                              inset 0 0 12px rgba(255, 255, 255, 0.15)
                            `,
                            color: "var(--color-dark)",
                            overflow: "hidden",
                            position: "relative",
                            fontFamily: "Poppins, sans-serif",
                            transition: "all 0.3s ease",
                          }}
                        >
                          {/* Subtle Pattern Overlay */}
                          <div
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              background: `
                                radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.2) 3%, transparent 5%),
                                radial-gradient(circle at 85% 85%, rgba(255, 255, 255, 0.2) 3%, transparent 5%)
                              `,
                              opacity: 0.5,
                              pointerEvents: "none",
                            }}
                          />

                          {/* Icon */}
                          <div className="text-center mb-5">
                            <motion.div
                              className="d-inline-flex align-items-center justify-content-center fa-cont"
                              style={{
                                width: "130px",
                                height: "130px",
                                fontSize: "4rem",
                                background: `
                                  linear-gradient(45deg, var(--color-primary), rgba(0, 229, 255, 0.5))
                                `,
                                borderRadius: "35px",
                                border: "2px solid var(--color-primary)",
                                boxShadow: `
                                  0 8px 20px var(--color-light),
                                  0 0 15px rgba(26, 131, 150, 0.3)
                                `,
                                color: "var(--color-dark)",
                              }}
                              whileHover={{
                                scale: 1.2,
                                rotate: 15,
                                boxShadow: "0 0 25px var(--color-primary)",
                              }}
                              whileTap={{ scale: 0.95 }}
                              transition={{ duration: 0.4, ease: easeInOut }}
                            >
                              {service.icon}
                            </motion.div>
                          </div>

                          {/* Content */}
                          <div className="about-item-bottom flex-grow-1 d-flex flex-column">
                            <h6
                              className="mt-4 bold fs-4 text-center"
                              style={{
                                color: "var(--color-dark)",
                                textShadow: "0 2px 5px rgba(0, 0, 0, 0.25)",
                                fontWeight: 700,
                                fontSize: "1.5rem",
                              }}
                            >
                              {service.title}
                            </h6>

                            <p
                              className="mt-4 text-center flex-grow-1 d-flex align-items-center"
                              style={{
                                color: "var(--color-dim)",
                                fontSize: "1.15rem",
                                lineHeight: "1.7",
                                fontWeight: 400,
                              }}
                            >
                              {service.shortDesc}
                            </p>

                            {/* Click to flip indicator */}
                            <motion.div
                              className="text-center mt-auto"
                              animate={{
                                opacity: [0.6, 1, 0.6],
                                scale: [1, 1.08, 1],
                              }}
                              transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              <small
                                style={{
                                  color: "var(--color-dim)",
                                  fontStyle: "italic",
                                  fontWeight: 500,
                                  fontSize: "0.95rem",
                                }}
                              >
                                Click to explore more 👆
                              </small>
                            </motion.div>
                          </div>
                        </div>

                        {/* Back Side */}
                        <div
                          className="about-item position-absolute w-100 h-100 d-flex flex-column"
                          style={{
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            borderRadius: "28px",
                            padding: "48px",
                            background: `
                              linear-gradient(145deg, var(--color-background2), var(--color-background)),
                              linear-gradient(45deg, rgba(255, 100, 108, 0.25) 0%, rgba(255, 0, 229, 0.25) 100%)
                            `,
                            backdropFilter: "blur(25px)",
                            boxShadow: `
                              0 12px 35px var(--color-light),
                              inset 0 0 12px rgba(255, 255, 255, 0.15)
                            `,
                            color: "var(--color-dark)",
                            overflow: "hidden",
                            position: "relative",
                            fontFamily: "Poppins, sans-serif",
                            transition: "all 0.3s ease",
                          }}
                        >
                          {/* Subtle Pattern Overlay */}
                          <div
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              background: `
                                radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 3%, transparent 5%),
                                radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 3%, transparent 5%)
                              `,
                              opacity: 0.5,
                              pointerEvents: "none",
                            }}
                          />

                          {/* Header */}
                          <div className="text-center mb-5">
                            <motion.div
                              className="d-inline-flex align-items-center justify-content-center mb-4 fa-cont"
                              style={{
                                width: "100px",
                                height: "100px",
                                fontSize: "2.8rem",
                                background: `
                                  linear-gradient(45deg, var(--color-primary), rgba(255, 0, 229, 0.5))
                                `,
                                borderRadius: "30px",
                                border: "2px solid var(--color-primary)",
                                boxShadow: `
                                  0 8px 20px var(--color-light),
                                  0 0 15px rgba(26, 131, 150, 0.3)
                                `,
                                color: "var(--color-dark)",
                              }}
                              whileHover={{
                                scale: 1.15,
                                boxShadow: "0 0 25px var(--color-primary)",
                              }}
                              transition={{ duration: 0.4, ease: easeInOut }}
                            >
                              {service.icon}
                            </motion.div>
                            <h6
                              className="bold fs-4 mb-0"
                              style={{
                                color: "var(--color-dark)",
                                textShadow: "0 2px 5px rgba(0, 0, 0, 0.25)",
                                fontWeight: 700,
                                fontSize: "1.5rem",
                              }}
                            >
                              {service.title}
                            </h6>
                          </div>

                          {/* Full Description */}
                          <div className="about-item-bottom flex-grow-1 d-flex flex-column">
                            <p
                              className="lh-base flex-grow-1 d-flex align-items-center"
                              style={{
                                color: "var(--color-dim)",
                                fontSize: "1.15rem",
                                lineHeight: "1.7",
                                fontWeight: 400,
                              }}
                            >
                              {service.fullDesc}
                            </p>

                            {/* Back button */}
                            <motion.div
                              className="text-center mt-auto"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <small
                                style={{
                                  color: "var(--color-dim)",
                                  fontStyle: "italic",
                                  fontWeight: 500,
                                  fontSize: "0.95rem",
                                }}
                              >
                                Click to go back 👆
                              </small>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import { easeInOut, motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const Testimonial = () => {
  const items = [
    {
      imageSrc: "/images/seid.jpg",
      name: "Ahmed Seidhat",
      role: "UI/UX Designer",
      description:
        "Exceptional attention to detail and outstanding customer service! David goes above and beyond to ensure client satisfaction. Highly recommended!",
      iconColor: "var(--color-primary)",
    },
    {
      imageSrc: "/images/pius.jpg",
      name: "Ikeoba Pius",
      role: "Product Designer",
      description:
        "Working with David has been a game-changer for our business. Their expertise and professionalism have helped us achieve remarkable results.",
      iconColor: "var(--color-primary)",
    },
    {
      imageSrc: "/images/id.jpg",
      name: "Moses Odimayo",
      role: "Software Engineer",
      description:
        "An absolute pleasure to collaborate with! David brings creativity, innovation, and a strong work ethic to every project.",
      iconColor: "var(--color-primary)",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const back = () => {
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isPaused, items.length]);

  return (
    <section
      className="testimonial-wrapper py-5"
      id="testimonial"
      style={{
        position: "relative",
        background: `
          linear-gradient(145deg, var(--color-background2), var(--color-background)),
          linear-gradient(45deg, rgba(26, 131, 150, 0.1) 0%, rgba(0, 229, 255, 0.1) 100%)
        `,
        backdropFilter: "blur(10px)",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
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
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4">
            <motion.h1
              className="head-text text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeInOut }}
              viewport={{ once: true }}
              style={{
                color: "var(--color-dark)",
                fontWeight: 700,
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(1.8rem, 5vw, 2.2rem)",
              }}
            >
              What{" "}
              <span style={{ color: "var(--color-primary)" }}>Clients</span> Say
            </motion.h1>
          </div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.9, ease: easeInOut }}
            className="d-flex justify-content-center align-items-center position-relative"
          >
            <motion.div
              className="test-arrow-left"
              onClick={back}
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 15px var(--color-primary)",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <FaArrowLeft
                className="arrow-left"
                style={{
                  color: "var(--color-primary)",
                  fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                }}
              />
              <Tooltip
                anchorSelect=".arrow-left"
                place="top"
                className="tooltip"
                style={{
                  fontSize: "0.9rem",
                  backgroundColor: "var(--color-primary)",
                }}
              >
                Previous
              </Tooltip>
            </motion.div>
            <motion.div
              className="test-arrow-right"
              onClick={next}
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 15px var(--color-primary)",
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <FaArrowRight
                className="arrow-right"
                style={{
                  color: "var(--color-primary)",
                  fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                }}
              />
              <Tooltip
                anchorSelect=".arrow-right"
                place="top"
                className="tooltip"
                style={{
                  fontSize: "0.9rem",
                  backgroundColor: "var(--color-primary)",
                }}
              >
                Next
              </Tooltip>
            </motion.div>
            <div className="w-100 test-container p-4">
              {items.map((item, idx) => (
                <motion.div
                  key={idx}
                  className={`test-item ${
                    idx === index
                      ? "active-slide"
                      : idx === (index - 1 + items.length) % items.length
                      ? "next-slide"
                      : "last-slide"
                  }`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: idx === index ? 1 : 0,
                    x: idx === index ? 0 : 100,
                  }}
                  transition={{ duration: 0.7, ease: easeInOut }}
                >
                  <motion.div
                    className="d-flex flex-column align-items-center"
                    style={{
                      background: `
                        linear-gradient(145deg, var(--color-background2), var(--color-background)),
                        linear-gradient(45deg, rgba(26, 131, 150, 0.2) 0%, rgba(0, 229, 255, 0.2) 100%)
                      `,
                      borderRadius: "20px",
                      padding: "clamp(1.5rem, 4vw, 2rem)",
                      boxShadow: "0 8px 25px var(--color-light)",
                      maxWidth: "clamp(300px, 95%, 600px)",
                      margin: "0 auto",
                      position: "relative",
                      zIndex: 5,
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      className="test-item-image-cont"
                      src={item.imageSrc}
                      alt={`${item.name}'s testimonial`}
                      style={{
                        width: "clamp(80px, 15vw, 100px)",
                        height: "clamp(80px, 15vw, 100px)",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid var(--color-primary)",
                        marginBottom: "1.5rem",
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <h4
                      className="bold text-center"
                      style={{
                        color: "var(--color-dark)",
                        fontWeight: 700,
                        fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.name}
                    </h4>
                    <h6
                      className="bold text-center"
                      style={{
                        color: "var(--color-dim)",
                        fontWeight: 500,
                        fontSize: "clamp(0.9rem, 2vw, 1rem)",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {item.role}
                    </h6>
                    <p
                      className="text-center test-desc"
                      style={{
                        color: "var(--color-dark)",
                        fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
                        lineHeight: "1.7",
                        fontWeight: 400,
                        maxWidth: "90%",
                      }}
                    >
                      {item.description}
                    </p>
                    <motion.div
                      style={{
                        color: item.iconColor,
                        fontSize: "clamp(2rem, 5vw, 2.5rem)",
                        marginTop: "1.5rem",
                      }}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <FaQuoteRight />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            {/* <div
              className="d-flex justify-content-center align-items-center gap-2 mt-5"
              style={{ position: "relative", zIndex: 10 }}
            >
              {items.map((_, idx) => (
                <motion.div
                  key={idx}
                  className="dot-list"
                  style={{
                    backgroundColor:
                      idx === index
                        ? "var(--color-primary)"
                        : "var(--color-dim)",
                    width:
                      idx === index
                        ? "clamp(8px, 2vw, 10px)"
                        : "clamp(5px, 1.5vw, 7px)",
                    height:
                      idx === index
                        ? "clamp(8px, 2vw, 10px)"
                        : "clamp(5px, 1.5vw, 7px)",
                    borderRadius: "50%",
                    cursor: "pointer",
                    opacity: 1,
                    transition: "all 0.3s ease",
                  }}
                  whileHover={{ scale: 1.3 }}
                  animate={{ scale: idx === index ? 1.2 : 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setIndex(idx)}
                />
              ))}
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

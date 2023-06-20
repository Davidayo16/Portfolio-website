import React from "react";
import "./Testimonial.css";
import { easeInOut, motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaQuoteRight,
  FaStreetView,
} from "react-icons/fa";
const Testimonial = () => {
  const items = [
    {
      // First item
      imageSrc: "/images/seid.jpg",
      name: "Ahmed Seidhat",
      role: "UI/UX Designer",
      description: `Exceptional attention to detail and exceptional customer service! David 
      goes above and beyond to ensure client satisfaction. Highly recommended!
       `,
      iconColor: "rgb(141, 54, 54)",
    },
    {
      // Second item
      imageSrc: "/images/pius.jpg",
      name: "Ikeoba Pius",
      role: "Product Designer",
      description: `Working with David has been a game-changer for our business. 
      Their expertise and professionalism have helped us achieve remarkable results.`,
      iconColor: "rgb(141, 54, 54)",
    },
    {
      // Third item
      imageSrc: "/images/id.jpg",
      name: "Moses Odimayo",
      role: "Software Engineer",
      description: `An absolute pleasure to collaborate with! David brings creativity, innovation, and a strong work ethic to every project. `,
      iconColor: "rgb(141, 54, 54)",
    },
  ];
  const [index, setIndex] = React.useState(0);
  const next = () => {
    setIndex(index + 1);
    console.log(index);
    if (index == items.length - 1) {
      setIndex(0);
    }
  };
  const back = () => {
    setIndex(index - 1);
    if (index == 0) {
      setIndex(items.length - 1);
    }
  };

  return (
    <>
      <section className="testimonial-wrapper py-3" id="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-3">
              <h1 className="head-text mt-10">
                Testimonial <span> Section</span>
              </h1>
            </div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.9, ease: easeInOut }}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="w-100 test-container p-3">
                <div className="text-arrow-right" onClick={() => next()}>
                  <FaArrowRight />
                </div>
                <div className="test-arrow-left" onClick={() => back()}>
                  <FaArrowLeft />
                </div>
                {items.map((item, idx) => {
                  let position = "last-slide";
                  if (idx === index) {
                    position = "active-slide";
                  }
                  if (
                    idx === index - 1 ||
                    (index == 0 && idx === items.length - 1)
                  ) {
                    position = "next-slide";
                  }

                  return (
                    <div className={`test-item  ${position}`}>
                      {/* <div className="test-item-image-cont"> */}
                      <img
                        className={`image-fluid test-item-image-cont`}
                        src={item.imageSrc}
                      />
                      <h4
                        style={{
                          color: "var(--color-dark)",
                          textTransform: "uppercase",
                        }}
                        className="mt-2 bold"
                      >
                        {item.name}
                      </h4>
                      <h6
                        className="bold"
                        style={{
                          color: "var(--color-dark)",
                          textTransform: "uppercase",
                        }}
                      >
                        {item.role}
                      </h6>
                      {/* </div> */}
                      <div className="w-50 test-desc">
                        <h5
                          className="text-center mb-4 mt-2"
                          style={{
                            color: "var(--color-dark)",
                            lineHeight: "1.4rem",
                            // textTransform: "uppercase",
                          }}
                        >
                          {item.description}
                        </h5>
                      </div>
                      <div
                        style={{
                          color: "rgb(141, 54, 54)",
                          fontSize: "57px",
                          display: "block",
                        }}
                      >
                        <FaQuoteRight />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;

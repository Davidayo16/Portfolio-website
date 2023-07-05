import React from "react";
import "./Footer.css";
import { FaBirthdayCake, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="footer-wrapper py-3" id="contact">
        <div className="container-xxl">
          <div className="row align-items-center justify-content-center ">
            <div className="col-12">
              <h1 className="head-text mt-10">
                Contact <span>Me</span>
              </h1>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-4 mb-4">
              <div className="w-50 d-flex gap-4 align-items-center form-top justify-content-center">
                <div className="d-flex gap-2 contact-icon">
                  <FaBirthdayCake className="foot-fa1 " />
                  <h6 className="mb-0">davidodimayo7@gmail.com</h6>
                </div>
                <div className="d-flex gap-2 contact-icon  contact-icon2">
                  <FaPhone className=" foot-fa2" />
                  <h6 className="mb-0">08103193091</h6>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-12 contact-us-cont w-75 mt-4">
              <div className="contact-us">
                <form
                  className="contact-form"
                  target="_blank"
                  action="https://formsubmit.co/0f2d4b58bdd39904b292bc11beedd40b"
                  method="POST"
                >
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Name"
                      name="name"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Subject"
                      name="subject"
                    />
                  </div>
                  <div class="mb-2">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Your Message"
                      name="message"
                    ></textarea>
                  </div>
                  <button className="contact-btn">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

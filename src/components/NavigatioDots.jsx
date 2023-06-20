import React from "react";

const NavigatioDots = ({ active }) => {
  return (
    <div className="app-navigation">
      {["home", "about", "skills", "testimonial", "contact"].map(
        (item, index) => {
          return (
            <li className="dot-list">
              <a
                href={`#${item}`}
                //   onClick={() => setToggle(false)}
                className="app-navigation-dot"
                style={active === item ? { backgroundColor: "red" } : {}}
              />
            </li>
          );
        }
      )}
    </div>
  );
};

export default NavigatioDots;

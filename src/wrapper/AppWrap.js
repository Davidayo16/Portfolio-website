import React from "react";
import SocialMedia from "../components/SocialMedia";
import NavigatioDots from "../components/NavigatioDots";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`body-wrapper ${classNames}`}>
        <SocialMedia />
        <div className="d-flex align-items-center justify-content center">
          <Component />
        </div>
        <NavigatioDots active={idName} />
      </div>
    );
  };

export default AppWrap;

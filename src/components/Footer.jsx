import React from "react";

function Footer(props) {
  const {
    themeToggler,
    themeObj: { bgColor, textColor, btnColor }
  } = props;

  return (
    <div className={`${textColor} ${bgColor}`}>
      <button className={`btn ${btnColor}`} onClick={themeToggler}>
        Change Theme
      </button>
      <span
        className={`display-6 text-center fixed-bottom py-3 ${textColor} ${bgColor}`}
      >
        Made By Karim
      </span>
    </div>
  );
}

export default Footer;

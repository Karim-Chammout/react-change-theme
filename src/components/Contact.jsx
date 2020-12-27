import React from "react";

function Contact(props) {
  const { bgColor, textColor } = props.themeObj;

  return (
    <div className="text-center">
      <div className={`${bgColor} ${textColor}`}>
        <h1>Contact Page</h1>
        <p>This is a paragraph from the Contact page</p>
      </div>
    </div>
  );
}

export default Contact;

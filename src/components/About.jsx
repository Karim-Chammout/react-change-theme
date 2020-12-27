import React from "react";

function About(props) {
  const { bgColor, textColor } = props.themeObj;

  return (
    <div className="text-center">
      <div className={`${bgColor} ${textColor}`}>
        <h1>About Page</h1>
        <p>This is a paragraph from the About page</p>
        <h2>Who We Are</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ab
          assumenda adipisci aut ullam suscipit eligendi dolores cum, numquam
          voluptatem? Fugit iure quia corporis, optio quaerat itaque voluptate
          libero ullam!
        </p>
      </div>
    </div>
  );
}

export default About;

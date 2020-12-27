import React from "react";

function Home(props) {
  const { bgColor, textColor } = props.themeObj;

  return (
    <div className="text-center">
      <div className={`${bgColor} ${textColor}`}>
        <h1>Welcome Home</h1>
        <p>This is a paragraph from the Home page</p>
      </div>
    </div>
  );
}

export default Home;

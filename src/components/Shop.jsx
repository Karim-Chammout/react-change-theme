import React from "react";

function Shop(props) {
  const { bgColor, textColor } = props.themeObj;

  return (
    <div className="text-center">
      <div className={`${bgColor} ${textColor}`}>
        <h1>Shopping Page</h1>
        <p>This is a paragraph from the Shopping page</p>
      </div>
    </div>
  );
}

export default Shop;

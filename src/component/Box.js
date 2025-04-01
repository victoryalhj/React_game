import React from "react";

const Box = (props) => {
  console.log("props",props)
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img
        className="item-image"
        src={props.item && props.item.image} />
      <h2>Win</h2>
    </div>
  );
};

export default Box;

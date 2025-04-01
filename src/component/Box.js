import React from "react";

const Box = (props) => {
  console.log("props",props)

  let result;
  if (props.title === "Computer" && props.result !== "draw" && props.result !== "") {
    result = props.result === "win"?"lose":"win";
    }else {
      result = props.result;
    }

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      {/* <h2>{props.item && props.item.name}</h2> */}
      <img
        className="item-image"
        src={props.item && props.item.image} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;

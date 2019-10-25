import React, { useState }from "react";

const Component = ({ component }) => {
  return (
    <div
      className="resize-drag"
      style={{
        backgroundColor: component.color,
      }}
    ></div>
  );
};

export default Component;

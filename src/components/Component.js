import React, { useState } from "react";

const Component = ({ component, dashboard }) => {
  if (!dashboard) {
    return <div></div>;
  }
  const zoneX = dashboard.getBoundingClientRect().left;
  const zoneY = dashboard.getBoundingClientRect().top;
  return (
    <div
      className="resize-drag"
      style={{
        backgroundColor: component.color,
        backgroundImage: `url(${component.image})`,
        backgroundSize: "cover",
        left: zoneX + component.x + "px",
        top: zoneY + component.y + "px",
        width: component.width + "px",
        height: component.height + "px",
        fontSize: '3em',
        overflow: 'hidden',
        fontWeight: 'bold',
      }}
    >{component.text}</div>
  );
};

export default Component;

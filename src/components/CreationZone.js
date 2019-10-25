import React from "react";
import Component from "../components/Component";
import draganddrop from "../helpers/draganddrop";

const CreationZone = ({ components }) => {
  return (
    <div className="resize-container" id="dashboard-creation-zone">
        {components.map(component => <Component component={component}></Component>)}
    </div>
  );
};

export default CreationZone;

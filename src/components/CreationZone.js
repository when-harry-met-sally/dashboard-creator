import React, {useEffect, useState, createRef } from "react";
import Component from "../components/Component";
import draganddrop from "../helpers/draganddrop";

const CreationZone = ({ components }) => {
  const ref = createRef();
  const [dashboard, setDashboard] = useState(null)
  useEffect(() => {
    setDashboard(ref.current)
  }, []);
  return (
    <div ref={ref} className="resize-container" id="dashboard-creation-zone">
      {components.map(component => (
        <Component component={component} dashboard={dashboard}></Component>
      ))}
    </div>
  );
};

export default CreationZone;

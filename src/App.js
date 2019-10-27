import React, { useState } from "react";
import Navigation from "./components/Navigation";
import defaultComponents from "./data/defaultComponents";

const App = () => {
  const [components, setComponents] = useState(defaultComponents);
  const [idCounter, setIdCounter] = useState(defaultComponents.length);
  const handleAddComponent = component => {
    setComponents([...components, { ...component, id: idCounter, x: 0, y: 0 }]);
    setIdCounter(idCounter + 1);
  };

  const handleEditComponent = component => {
    const copy = [...components];
    copy[copy.findIndex(comp => comp.id === component.id)] = component;
    setComponents(copy);
  };

  const handleSubmit = component => {
    if (component.id === undefined) {
      handleAddComponent(component);
    } else {
      handleEditComponent(component);
    }
  };

  const handleDelete = component => {
    const copy = [...components].filter(comp => comp.id !== component.id);
    setComponents(copy);
  };

  return (
    <Navigation
      components={components}
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
    />
  );
};

export default App;

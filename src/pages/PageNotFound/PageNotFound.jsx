import React, { useState } from "react";
import "./PageNotFound.scss";
function PageNotFound() {
  const [stateX, setstateX] = useState(0);
  const [stateY, setstateY] = useState(0);

  const handleChange = (e) => {
    setstateX(e.nativeEvent.offsetX);
    setstateY(e.nativeEvent.offsetY);
  };

  return (
    <div
      className="not-found-page"
      onMouseMove={(e) => {
        handleChange(e);
      }}
    >
      this is page not found :::: {stateX} and {stateY}
    </div>
  );
}

export default PageNotFound;

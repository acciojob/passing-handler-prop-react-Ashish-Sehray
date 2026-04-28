import '../styles/Child.css';
import React, { useState } from "react";

function Selection({ applyColor }) {
  const [background, setBackground] = useState("");
  function updateSelectionStyle(backgroundColor) {
    setBackground(backgroundColor.background);
  }
    return (
    <>
      <div id="master">
      
        <div
          className="fix-box subheading"
          style={{ backgroundColor: `${background}` }}
          onClick={() => applyColor(updateSelectionStyle)}
        >
          Selection
        </div>
       
      </div>
    </>
  );
}
export default Selection;

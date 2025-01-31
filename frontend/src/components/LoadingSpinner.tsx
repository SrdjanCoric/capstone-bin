import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="window" style={{ marginTop: "50px" }}>
      <div className="title-bar">
        <div className="title-bar-text">Loading...</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body" style={{ padding: "16px" }}>
        <div className="centered-content">
          <div className="status-bar" style={{ marginBottom: "16px" }}>
            <div className="status-bar-field">Please wait...</div>
          </div>
          <progress></progress>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

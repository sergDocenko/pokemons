import React from "react";
import "./errorBoundaryFallback.scss";

const ErrorBoundaryFallback = () => {
  return (
    <div className="error">
      <h1>
        Something went wrong! Error was captured by ErrorBoundary component.{" "}
      </h1>
    </div>
  );
};

export default ErrorBoundaryFallback;

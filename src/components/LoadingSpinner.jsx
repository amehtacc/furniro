import React from "react";

function LoadingSpinner() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-400 rounded-full animate-spin"></div>
    </div>
  );
}

export default LoadingSpinner;

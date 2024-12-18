// components/ExternalPage.js
import React from "react";

const ExternalPage = ({ url }) => {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <iframe
        src={url}
        title="External Page"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
};

export default ExternalPage;

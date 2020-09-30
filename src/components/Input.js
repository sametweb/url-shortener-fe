import React from "react";

import Search from "antd/lib/input/Search";

function Input({ shortenUrl, validError }) {
  return (
    <>
      <label htmlFor="url-input" style={{ display: "none" }}>
        URL Input
      </label>
      <Search
        placeholder="Input long URL"
        enterButton="Shorten"
        size="large"
        onSearch={shortenUrl}
        id="url-input"
      />
      {validError && <span className="error">{validError}</span>}
    </>
  );
}

export default Input;

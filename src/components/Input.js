import React from "react";

import Search from "antd/lib/input/Search";

function Input({ shortenUrl, validError }) {
  return (
    <>
      <Search
        placeholder="Input long URL"
        enterButton="Shorten"
        size="large"
        onSearch={shortenUrl}
        id="url-input"
      />
      <label htmlFor="url-input" style={{ visibility: "hidden" }}>
        URL Input
      </label>
      {validError && <span className="error">{validError}</span>}
    </>
  );
}

export default Input;

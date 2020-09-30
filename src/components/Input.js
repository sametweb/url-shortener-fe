import React from "react";

import { Input as AntdInput } from "antd";

function Input({ shortenUrl, validError }) {
  return (
    <>
      <AntdInput.Search
        placeholder="Input long URL"
        enterButton="Shorten"
        size="large"
        onSearch={shortenUrl}
        id="url-input"
      />
      <label htmlFor="url-input" className="visuallyhidden">
        URL Input
      </label>
      {validError && <span className="error">{validError}</span>}
    </>
  );
}

export default Input;

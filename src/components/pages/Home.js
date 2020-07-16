import React from "react";
import { css } from 'emotion';
import Directory from "../Directory";

const inputStyle = css`
    text-align: center;
    padding: 20px;
    `

function Home() {
  return (
    <div>
      <div className={inputStyle}>
        <input />
      </div>
      <div>
        <Directory />
      </div>
    </div>
  );
}

export default Home;

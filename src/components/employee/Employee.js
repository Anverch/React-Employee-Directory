import React from "react";
import { css } from 'emotion';

const employeeStyle = css`
    text-align: center;
    padding: 20px;
    border-bottom: 1px solid white;
    background-color: lightgray;
    margin: auto; 
    width: 90%;
    `

function Employee(props) {
  return (
    <div className={employeeStyle}> {props.data.email}
     
    </div>
  );
}

export default Employee;
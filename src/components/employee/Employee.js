import React from "react";
import { css } from 'emotion';

const employeeStyle = css`
    text-align: center;
    padding: 1px;
    border-bottom: 1px solid white;
    background-color: lightgray;
    margin: auto; 
    width: 90%;
    display: flex;
    flex-wrap: nowrap;
    `

const eachDivStyle = css`
    margin: 10px;
    text-align: center
    display: block;
    width: 220px;
    `

function Employee(props) {

  const birthdate = (props.data.dob.date).slice(0, 10);
  const email = props.data.email;
  
  // <div><span>Name</span><span>cell</span><span>email</span><span>DOB</span></div>
  return (
    <div className={employeeStyle}> 
      <div className={eachDivStyle}>
        <img src={props.data.picture.thumbnail} />
      </div>
      <div className={eachDivStyle}>
        {`${props.data.name.first} ${props.data.name.last}`}
      </div>
      <div className={eachDivStyle}>
        {props.data.cell}
      </div>
      <a className={eachDivStyle} href="email" >
        {email}
      </a>
      <div className={eachDivStyle}>
        {birthdate}
      </div>
    </div>
  );
}

export default Employee;
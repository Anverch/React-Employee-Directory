import React from 'react';
import { css } from 'emotion';
import Employee from './employee/Employee';

const directoryStyle = css`
    color: black;
    text-align: center;
    padding: 5px;
    `

export default class Directory extends React.Component{

    render(){
        /// transforming the date in the JSON to components 
        const employees = this.props.data.map(employee=> {
            /// returning an employee component for each 
            return <Employee data={employee} key={employee.email}/>
        })
        return <div>
                    {employees}
                </div>
    }
}
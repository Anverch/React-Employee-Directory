import React from 'react';
import { css } from 'emotion';
import Employee from './employee/Employee';

// const directoryStyle = css`
//     color: black;
//     text-align: center;
//     padding: 5px;
//     `

export default class Directory extends React.Component{

    render(){
        if(this.props.data===null || this.props.data.length===0){
            return <div> No Results </div>
        }
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
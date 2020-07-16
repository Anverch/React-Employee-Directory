import React from 'react';
import { css } from 'emotion';

const headerStyle = css`
background-color: navy;
color: white;
text-align: center;
border-bottom: 5px solid red;
padding: 30px;
`


export default class Header extends React.Component{
    render(){
        return <div className={headerStyle}>
            <h1 className={css`
            font-size: 25px
            `}>Employee Directory</h1>
            <h2 className = {css`
                font-size: 15px`}>
                Click on carrots to filter by heading or use the search box to narrow your results
            </h2>
      </div>
            
      
    }
}
import React from "react";
import { css } from 'emotion';
import Directory from "../Directory";
import api from "../../api/api";

const inputStyle = css`
    text-align: center;
    padding: 20px;
    `

const headingRow = css`
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
    font-weight: bold;
    `  
class Home extends React.Component{
  state = {
    employees: [],
    loading: true,
    searchText: "",
    results: []
  }
  async componentDidMount(){
    const users = await api.getUsers();
    console.log(users);
    this.setState({
      employees: users.data.results,
      results: users.data.results
    })
  }

  search=(searchText)=>{
    const {employees} = this.state;
    const results = employees.map(item=>{
      const fullName = (item.name.first + item.name.last ).toLowerCase();
      if (fullName.includes(searchText)){
        return item
      }
      if ((item.cell.replace(" ", "")).includes(searchText)){
        return item
      }
    }).filter(item=>item !==undefined)
    this.setState({
      results: results
    })
  }

  handleInput=(e)=>{
    console.log(e);
    this.search((e.target.value || " ").replace(" ", "").toLowerCase());
  }

    render(){
     return ( 
       <div>
         <div className={inputStyle}>
           <input type="text" placeholder="Search" onChange={this.handleInput}></input>
         </div>
         <div className={headingRow}>
         <span className={eachDivStyle}></span>
           <span className={eachDivStyle}>Name</span>
           <span className={eachDivStyle}>Cell</span>
           <span className={eachDivStyle}>Email</span>
           <span className={eachDivStyle}>DOB</span>
         </div>
         <div>
           <Directory data={this.state.results} />
         </div>
       </div>
     );
   }
   
}

export default Home;

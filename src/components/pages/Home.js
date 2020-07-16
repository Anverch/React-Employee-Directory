import React from "react";
import { css } from 'emotion';
import Directory from "../Directory";
import api from "../../api/api";

const inputStyle = css`
    text-align: center;
    padding: 20px;
    `
class Home extends React.Component{
  state = {
    employees: [],
    loading: true
  }
  async componentDidMount(){
    const users = await api.getUsers();
    console.log(users);
    this.setState({
      employees: users.data.results
    })
  }
   render(){
     return (
       <div>
         <div className={inputStyle}>
           <input />
         </div>
         <div>
           <Directory data={this.state.employees} />
         </div>
       </div>
     );
   }
}

export default Home;

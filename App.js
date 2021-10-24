import React, { Component } from 'react'
import Users from './components/Users';
import './styles.css'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      usersData : [],
       loading: true
    }
  }
  getUsers = async () => {
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ usersData: users.data, loading: false });
        
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  render() {
    return (
      <div>
        <div className="navbar">
            <ul>
                <li><h1>GETin</h1></li>
                <li><button type="submit" onClick={this.getUsers} >Get Users</button></li>
            </ul>
        </div>
     
      <Users loading={this.state.loading} users={this.state.usersData}/>
   </div>
      
    )
  }
}

export default App


import React from 'react'
import './userStyles.css'

function Users({loading,users}) {
    return loading ? ( <center>
 <div id="main">
        <p>Click on the button <span>Get Users</span> to get users...</p>
      </div>
    </center>
       
    ) :
    (
      <div>
          <div className="container my-3">
          <div className="row my-3" >
          {users.map(user => 
          <div className="col-md-4" key={user.id}>
              <div className="card my-3" style={{width: "18rem",backgroundColor :"#DF711B"}}>
            <img src={user.avatar} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                <p className="card-text">{user.email}</p>
                
            </div>
            </div>
              
          </div>)}
          </div>
          </div>
      
</div>)}

export default Users

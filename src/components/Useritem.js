import React, { Component } from 'react'
import User from './User'
import userdata from '../userdata.json'




export class Useritem extends Component {
    render() {
        return (
            <div className='container my-5 ' >
                <div className='row '>
                {userdata.users.map((user) => (
            <div className="col-md-4 my-3" key={user.id}>
              <User user={user} />
            </div>
          ))}
                   
                    
                </div>

            </div>
        )
    }
}

export default Useritem

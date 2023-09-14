import React, { Component } from 'react';


export class User extends Component {
 
  

  render() {
    const { user } = this.props;

    return (
      <div className="container">
        <div className="card" style={{ width: '10rem' }}>
          <img src={user.imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">Age: {user.age}</p>
            <p className="card-text">Location: {user.location}</p>
            <p className="card-text">Occupation: {user.occupation}</p>
            <p className="card-text">Description: {user.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => this.openOSMMap(user.latitude, user.longitude)}
            >
              Summary
            </button>
           
          </div>
        </div>
      </div>
    );
  }
}

export default User;

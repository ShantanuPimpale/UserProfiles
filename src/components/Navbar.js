import React, { Component } from 'react';
import data from '../userdata.json';
import Spinner from './Spinner';


const osmMapBaseUrl = 'https://www.openstreetmap.org/?mlat=';

class Navbar extends Component {
  openOSMMap = (latitude, longitude) => {
    const osmMapUrl = `${osmMapBaseUrl}${latitude}&mlon=${longitude}&zoom=15`;
    window.open(osmMapUrl, '_blank');
  };

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      filteredUsers: [],
      loading: true, // Initially set loading to true
    };
  }

  componentDidMount() {
    // Simulate a loading delay for the first page load
    setTimeout(() => {
      this.setState({
        filteredUsers: data.users,
        loading: false, // Set loading to false when data is loaded
      });
    }, 1000); // Simulated delay of 1 second (replace with actual data fetching)
  }

  handleSearchChange = (e) => {
    const search = e.target.value;
    this.setState({ search }, this.filterUsers);
  };

  filterUsers = () => {
    const { search } = this.state;
    // Set loading to true when searching
    this.setState({ loading: true });

    // Simulate a delay for searching (you can replace this with your actual search logic)
    setTimeout(() => {
      const filteredUsers = data.users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );

      // Set loading to false when search is complete
      this.setState({ filteredUsers, loading: false });
    }, 1000); // Simulated delay of 1 second
  };

  render() {
    const { search, filteredUsers, loading } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Bynry
            </a>
            <div className="ml-auto">
              <form className="form-inline" role="search">
                <input
                  className="form-control mr-2"
                  type="search"
                  placeholder="Search by name"
                  aria-label="Search"
                  value={search}
                  onChange={this.handleSearchChange}
                />
              </form>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <div className="row">
            {/* Display loading spinner if loading is true */}
            {loading && <Spinner />}
            {filteredUsers.map((user, index) => (
              <div className="col-md-4" key={index}>
                <div className="card my-3" style={{ width: '18rem' }}>
                  <img src={user.imgUrl} className="card-img-top" alt="User" />
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">Age: {user.age}</p>
                    <p className="card-text">Location: {user.location}</p>
                    <p className="card-text">Occupation: {user.occupation}</p>
                    <p className="card-text">Description: {user.description}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        this.openOSMMap(user.latitude, user.longitude)
                      }
                    >
                      Summary
                    </button>
                    <button className="btn btn-primary mx-2">Edit</button>
                    <button className="btn btn-primary mx-2">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

import { Navigate } from 'react-router-dom';
import React from 'react';
import { Weather } from '../pages/Weather';
import '../style/style.css';

class Forecast extends React.Component {

    logout() {
      localStorage.setItem('logged', '0')
    }

    render(){
    if (localStorage.getItem('logged')=='0') {
      return (
        <Navigate
          to={{
            pathname: "/login",
          }}
        />
      );
    }

    return (
      <div>
        <Weather />
        <button className="logout" onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Forecast;
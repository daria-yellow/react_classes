import Homepage from '../pages/Homepage';
import React from "react";
import '../style/style.css';

class Home extends React.Component {

    logout() {
        localStorage.setItem('logged', '0')
      }


    render(){

        if (localStorage.getItem('logged')=='0') {
        return (
            <div>
            <Homepage />
            </div>
        );
        }
        return (
        <div>
            <button className="logout" onClick={this.logout}>Logout</button>
            <Homepage />
        </div>
        );
    }
}

  export default Home;
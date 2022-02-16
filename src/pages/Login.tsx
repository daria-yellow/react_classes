import React from "react";
import { useNavigate } from "react-router-dom";


const Login = () =>  {

  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
    
  const navigate = useNavigate();

  const handleEmail = (e: any) =>{
    setEmail(e.target.value);
  }

  const handlePass = (e: any) =>{
    setPass(e.target.value);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (localStorage.getItem('email') === email && localStorage.getItem('pass') === pass){
      localStorage.setItem('logged', '1');

      navigate('/forecast');
    }
  }

  return (
    <div className="loginpage">
      <p>Please, log in to see the weather forecast</p>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={pass}
          onChange={handlePass}
        />
        <br />
        <button className="buttons" type="submit" name="login">Login</button>
      </form>
    </div>
  )

}

export { Login }
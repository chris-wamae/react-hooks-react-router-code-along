import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Route,Routes,NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar(){
  return(
    <div>
      <NavLink
      to="/"
      exact
      style={linkStyles}
      activeStyle={{background:"darkblue"}}>
        Home
      </NavLink>
      <NavLink
      to="/about"
      exact
      style={linkStyles}
      activeStyle={{background:"darkblue"}}>
        About
      </NavLink>
      <NavLink
      to="/login"
      exact
      style={linkStyles}
      activeStyle={{background:"darkblue"}}>
        Login
      </NavLink>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

function App() {
  return  <>
          <NavBar/>
          <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/about" element={<About/>}/>
              <Route exact path="/" element={<Home />}/>
          </Routes>
            </>
         
          
}

ReactDOM.render(<BrowserRouter><App />
</BrowserRouter>, document.getElementById("root"));

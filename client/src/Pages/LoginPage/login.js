import { Button, TextField } from "@material-ui/core";
import style from "./LoginPage.css";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Login from "../../Assets/images/images/bgLogin.png";
import { NavLink } from "react-router-dom";
function Celeb() {
  return (
    <>
      <div>
        <img
          style={{ width: "100%", height: "100vh", position: "absolute" }}
          src={Login}
        ></img>
        <div
          style={{
            position: "absolute",
            marginLeft: "200px",
            marginTop: "150px",
          }}
        >
          <center>
            <h1>Sign in to your Account</h1>
            <br></br>
            <center>
              <span>
                <FaFacebook></FaFacebook>
                <FaGithub style={{ marginLeft: "10px" }}></FaGithub>
                <FaLinkedin style={{ marginLeft: "10px" }}></FaLinkedin>
                <FaTwitter style={{ marginLeft: "10px" }}></FaTwitter>
              </span>
            </center>
            <br></br>
            <br></br>

            <line>or use your email Account</line>
            <br></br>
            <br></br>
            <span>
              <TextField label="Email"></TextField>
              <br></br>
              <TextField label="password"></TextField>
            </span>
            <br></br>
            <br></br>
            <b>
              <a href="#" style={{ color: "black", width: "200px" }}>
                Forgot password?
              </a>
            </b>
            <br></br>
            <br></br>
            <Button
              style={{
                backgroundColor: "#585480",
                width: "150px",
                color: "white",
              }}
            >
              sign in
            </Button>
          </center>
        </div>
        <div
          style={{
            height: "500px",
            width: "500px",
            position: "absolute",
            marginLeft: "900px",
            marginTop: "150px",
          }}
        >
          <center>
            <h1 style={{ color: "white", fontSize: "60px" }}>HELLO FRIEND!</h1>
            <span>
              <line style={{ color: "white", fontSize: "30px" }}>
                Enter your personal details and <br></br> start journey with us
              </line>
            </span>
            <br></br>
            <br></br>
            <br></br>
            <Button style={{ backgroundColor: "#585488", color: "white" }}>
              <NavLink
                to="/Signup"
                style={{
                  backgroundColor: "#585488",
                  width: "150px",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Signup
              </NavLink>
            </Button>
          </center>
        </div>
      </div>
    </>
  );
}

export default Celeb;

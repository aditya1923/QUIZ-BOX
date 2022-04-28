import React from "react";
import style from "./Signup.css";
import logo from "../../Assets/images/Logo/logo.png";
import { Button, TextField } from "@material-ui/core";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import bgSign from "../../Assets/images/images/bgSign.png";
const Signup = () => {
  return (
    <>
      <div>
        <img
          style={{ width: "100%", height: "100vh", position: "absolute" }}
          src={bgSign}
        ></img>
         <div style={{ position: "absolute",marginLeft:""}}>
          <img style={{height:"600px",marginTop:"150px"}} className={style.logo} src={logo}></img>
        </div>
        <div style={{position:"absolute",marginLeft:"1000px",marginTop:"150px"}} className={style.box}>
            <h1>Create Account</h1>
            <br></br>
            <center>
              <span>
                <FaFacebook></FaFacebook>
                <FaGithub style={{ marginLeft: "10px" }}></FaGithub>
                <FaLinkedin style={{ marginLeft: "10px" }}></FaLinkedin>
                <FaTwitter style={{ marginLeft: "10px" }}></FaTwitter>
              </span>
            </center><br></br><br></br>

            <line>or use your email for registration</line>
            <br></br>
            <br></br>
            <span>
              <TextField label="Name"></TextField>
              <br></br>
              <TextField label="Email"></TextField>
              <br></br>
              <TextField label="password"></TextField>
              <br></br>
              <TextField label="Re enter your password"></TextField>
            </span>
            <br></br>
            <br></br>
            <Button
              style={{
                backgroundColor: "#585480",
                width: "150px",
                color: "white",
              }}
            >
              sign up
            </Button>
          </div>
       
        {/* <div style={{ position: "absolute",marginLeft:""}}>
          <img className={style.logo} src={logo}></img>
        </div>
        <center>
          <div className={style.box}>
            <h1>Create Account</h1>
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

            <line>or use your email for registration</line>
            <br></br>
            <br></br>
            <span>
              <TextField label="Name"></TextField>
              <br></br>
              <TextField label="Email"></TextField>
              <br></br>
              <TextField label="password"></TextField>
              <br></br>
              <TextField label="Re enter your password"></TextField>
            </span>
            <br></br>
            <br></br>
            <Button
              style={{
                backgroundColor: "#585480",
                width: "150px",
                color: "white",
              }}
            >
              sign up
            </Button>
          </div>
        </center> */}

      </div>
    </>
  );
};

export default Signup;

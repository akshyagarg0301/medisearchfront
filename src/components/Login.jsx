import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import "./UserRegister.css";
import axios from "axios";
// import "./BusReg.js"
export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");


    const myfunc=()=>{

        if(document.getElementById("load2").type === "password")
        document.getElementById("load2").type = "text";
        else
        document.getElementById("load2").type = "password"
        // elem.type="text";
        // document.getElementById("password-field").;
    }


  return (
    <div id="contact">
      {isSubmitted ? (
        <Typography color="inherit" variant="h1">
          Go back and login now
        </Typography>
      ) : (
        <>
          <h1>Login</h1>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (email && pass)
                axios
                  .post("", {
                    email,pass
                  })
                  .then((response) => {
                    console.log(response);
                    setIsSubmitted(true);
                  });
            }}
          >
            
            
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Enter your email" required
            />
             <div class="input-container">
            <input id="load2"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              name="password"
              placeholder="Enter Your Password" required
            />
            <i class="material-icons visibility"  onClick={myfunc}>visibility_off</i>
            </div>
            <input type="submit" value="Submit" />
    
          </form>
        </>
      )}
    </div>
  );
}
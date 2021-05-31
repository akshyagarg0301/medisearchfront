import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import "./UserRegister.css";
import axios from "axios";
import LogIn from'./Login.jsx'
export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState("");
  const [aadhar, setAadhar] = useState();


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
     
         <LogIn/>
      
      ) : (
        <>
          <h1>Register as a User</h1>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (name && email && pass && phone && aadhar)
                axios
                  .post("https://foodpedia2.herokuapp.com/addReview", {
                    name,
                    email,
                    pass,
                    phone,
                    aadhar
                  })
                  .then((response) => {
                    console.log(response);
                    setIsSubmitted(true);
                  });
            }}
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              name="name"
              placeholder="Full Name" required
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              name="Phone"
              placeholder="Enter your phone number" required
            />
            
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Enter your email" required
            />
            <input
              value={aadhar}
              onChange={(e) => setAadhar(e.target.value)}
              type="text"
              name="aadhar"
              placeholder="Enter Your aadhar card number" required
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
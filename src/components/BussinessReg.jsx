import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import "./BusRegister.css";
import axios from "axios";
import LogIn from'./Login.jsx'
export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [aadhar, setAadhar] = useState();
  const [shop,setShop]=useState("");
  const [licen,setLicen]=useState("");
  const [add,setAdd]=useState("");
  const [pin,setPin]=useState("");

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
          <h1>Register For Business</h1>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (name && email && pass && phone1 &&  aadhar && licen && pin && aadhar)
                axios
                  .post("https://foodpedia2.herokuapp.com/addReview", {
                    name,
                    email,
                    pass,
                    phone1,
                    aadhar,shop,phone2,licen,pin, add
                  })
                  .then((response) => {
                    console.log(response);
                    setIsSubmitted(true);
                  });
            }}
          >
              <input
              value={name}
              onChange={(e) => setShop(e.target.value)}
              required
              type="text"
              name="shopname"
              placeholder="Shop Name" required
            />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              name="name"
              placeholder="Owner's Name" required
            />
            <input
              value={phone1}
              onChange={(e) => setPhone1(e.target.value)}
              type="number"
              name="Phone2"
              placeholder="Enter your phone number 1" required
            />
            <input
              value={phone2}
              onChange={(e) => setPhone2(e.target.value)}
              type="number"
              name="Phone2"
              placeholder="Enter your phone number 2"
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
            <input
              value={licen}
              onChange={(e) => setLicen(e.target.value)}
              type="text"
              name="License Number"
              placeholder="Enter Your License number" required
            />
            <input
              value={add}
              onChange={(e) => setAdd(e.target.value)}
              required
              type="text"
              name="Address"
              placeholder="Address" required
            />
            <input
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
              type="number"
              name="PINCODE"
              placeholder="PINCODE" 
            />
            <div class="input-container">
            <input id="load2"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              name="password"
              placeholder="Enter Your Password" required
            />
            <i class="material-icons visibility" onClick={myfunc}>visibility_off</i>
            </div>
            <input type="submit" value="Submit" />
    
          </form>
        </>
      )}
    </div>
  );
}
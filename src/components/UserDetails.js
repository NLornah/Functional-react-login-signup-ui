import React, { Component, useEffect, useState } from "react";
// import AdminHome from "./adminHome";

// import UserHome from "./userHome";
componentDidMount(){
    fetch("http://localhost:3000/userData",{
        method:"POST",
        crossDomain:"true",
        headers:{
          "Content-type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*"
        },
        body: JSON.stringify({
         token,
        }),
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      })
  
}
export default class UserDetails extends Component {
    render() {
        return(
            <div>
                Name<h1>Jayy</h1>
                Email<h1>Jayy@123</h1>
            </div>
        );
    }
}

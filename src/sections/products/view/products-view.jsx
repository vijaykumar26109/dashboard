import axios from "axios";
import { useState } from "react";

import { Button, TextField } from "@mui/material";

import "./Products-view.css"

export default function ProductsView() {

  const[ip,setIp]=useState(null);
  const[port,setPort]=useState(null);
  const[user,setUser]=useState(null);
  const[password,setPassword]=useState(null);
  const[isonboard,setIsonboard]=useState(true);

  const handleSubmit=async()=>{
    console.log("before hit");
    const url=`https://${ip}:${port}/alfresco/api/-default-/public/authentication/versions/1/tickets`;
    await axios.post(url,{
        "userId": user,
        "password": password
      }
    ).then((res)=>{
      console.log(res.data);
      setIsonboard(false);
    }).catch((err)=>{
      console.log(err);
      setIsonboard(false);
    });
    console.log("after hit")
  }
 
    

  return (
    <>
      {isonboard ? <div className="text-div">
        <h1>Onboard DMS</h1>
      <TextField id="outlined-basic" label="Ip address" variant="outlined"
                  onChange={(e)=> setIp(e.target.value)} className="text-field" required/>
      <TextField id="outlined-basicc" label="Port" variant="outlined"
      onChange={(e)=> setPort(e.target.value)} className="text-field" required/>
      <TextField id="outlined-basic" label="Username" variant="outlined"
      onChange={(e)=> setUser(e.target.value)} className="text-field" required/>
      <TextField id="outlined-basic" label="Password" variant="outlined"
      onChange={(e)=> setPassword(e.target.value)} className="text-field" type="password" required/>
      <Button variant="outlined" onClick={handleSubmit}>submit</Button> </div> : 
      
      <>
      <div className="heading">Onboarded DMS Details</div>
      <div className="onboard-main">
      <div>
      <h2 >Ip address</h2>
      <span>192.168.1.153</span>
      </div>
      <div>
      <h2>port</h2>
      <span>8443</span>
      </div>
      <div>
      <h2>username</h2>
      <span>admin</span>
      </div>
      </div>
      </>}
    </>
  );
}



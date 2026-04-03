import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { supabase } from "../supaBaseClient"

export default  function  LoginPage(){
 const [loginData,SetloginData] = useState({
  email: "",
  password: ""
 })

const handleChange = (e) => {
        SetloginData({ ...loginData, [e.target.name]: e.target.value });
    };

const navigation = useNavigate()

const handleLogin = async (e) => {
  e.preventDefault()

  const {data,error} = await supabase.auth.signInWithPassword({
    email: loginData.email,
    password: loginData.password
  })

  if(error){
    alert(error.message)
  }else{
navigation("/dashboard")
  }
}

    return(
        <>
        <div className="Login-Page">
          <h1>Login</h1>
            <div className="login">
              <form onSubmit={handleLogin}>
                <input type="text" name="email" onChange={handleChange} placeholder="Username or Email" />
                <br />
                <input type="password" name="password" onChange={handleChange} placeholder="Password" />
                <br />
                <button type="submit" style={{cursor:"pointer"}}>Login</button>
              </form>
            </div>
            <div className="login-img-box">
            </div>
        </div>
        </>
    )
}
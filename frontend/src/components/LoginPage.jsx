import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { supabase } from "../supaBaseClient"
import { Link } from "react-router-dom";

export default function LoginPage() {

  const green = "#0a9396"

  const [loginData, SetloginData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    SetloginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const navigation = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginData.email,
      password: loginData.password
    })

    if (error) {
      alert(error.message)
    } else {
      navigation("/dashboard")
    }
  }

  return (
    <>
      <div className="Login-Page">
        <div className="login">
          <form onSubmit={handleLogin}>
            <div>
              <p style={{ fontWeight: "bold", fontSize: "22px", color: green }}>Login</p>
              <p style={{ marginTop: "5px", color: "grey" }}>Welcome back to Block Intel!</p>
            </div>
            <input type="text" name="email" onChange={handleChange} placeholder="Email" />
            <br />
            <input type="password" name="password" onChange={handleChange} placeholder="Password" />
            <br />
            <button type="submit" className="Login-btn">Login</button>
            <br />
            <div className="UserNoAcct">
              <p>Don't have an Account?</p>
              <Link to="/signup">
                <button>Sign Up</button>
              </Link>
            </div>
            <p className="forgot-password">Forgot Password</p>
          </form>
        </div>
        <div className="login-img-box">
        </div>
      </div>
    </>
  )
}
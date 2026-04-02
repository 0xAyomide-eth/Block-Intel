import { useState } from "react"

export default function SignUp(){
  const [Password, setPassword] = useState("")
  const [inputType, setinputType] = useState("password")
 


    return(
        <>
        <div className="main-signup">
            <div className="signup">
              <form action="POST">
                <input type="text" placeholder="Username" />
                <br />
                <input type="email" placeholder="Email" />
                <br />
                <input type="password" placeholder="Password" />
                <br />
                <input type="text" placeholder="confirm password"/>
                <br />
                <button type="button">Sign Up</button>
              </form>
            </div>
            <div className="signup-img-box">

            </div>
        </div>
        </>
    )
}
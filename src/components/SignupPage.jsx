import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { supabase } from "../supaBaseClient"
import { Link } from "react-router-dom";

export default function SignUp() {

    const green = "#0a9396"

    const [formdata, setformdata] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    };

    const handleSignUp = async (e) => {
        e.preventDefault();

        /*if (formdata.password !== formdata.confirmPassword) {
            alert("passwords dont match!")
            return
        }*/

        //signup part
        const { data, error } = await supabase.auth.signUp({
            email: formdata.email,
            password: formdata.password,
            options: {
                data: {
                    username: formdata.username,
                }
            }
        })

        if (error) {
            alert(error.message)
        } else {
            navigate("/dashboard")
        }

    }

    return (
        <>
            <div className="main-signup">
                <div className="signup">
                    <form onSubmit={handleSignUp}>
                        <div>
                            <p style={{ fontWeight: "bold", fontSize: "22px", color:green }}>Get Started</p>
                            <p style={{ marginTop: "5px", color: "grey" }}>Welcome to Block Intel</p>
                        </div>
                        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
                        <br />
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                        <br />
                        <input type="text" name="password" placeholder="Password" onChange={handleChange} />
                        <br />
                        <input type="text" name="confirmpassword" placeholder="confirm password" onChange={handleChange} />
                        <br />
                        <button type="submit" className="SignUp-btn">Sign Up</button>
                        <br />
                        <div className="userHasAcct">
                            <p>Already have an Account?</p>
                            <Link to="/login">
                                <button>Log in</button>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="signup-img-box">
                </div>
            </div>
        </>
    )
}
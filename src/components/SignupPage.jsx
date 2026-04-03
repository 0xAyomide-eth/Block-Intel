import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { supabase } from "../supaBaseClient"
import { Link } from "react-router-dom";

export default function SignUp() {
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
                <h1>Create Account</h1>
                <div className="signup">
                    <form onSubmit={handleSignUp}>
                        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
                        <br />
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                        <br />
                        <input type="text" name="password" placeholder="Password" onChange={handleChange} />
                        <br />
                        <input type="text" name="confirmpassword" placeholder="confirm password" onChange={handleChange} />
                        <br />
                        <button type="submit" style={{ cursor: "pointer" }}>Sign Up</button>
                        <Link to="/login">
                        <button>Already have an Account?</button>
                        </Link>
                    </form>
                </div>
                <div className="signup-img-box">
                </div>
            </div>
        </>
    )
}
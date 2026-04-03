import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../supaBaseClient"

export default function Dashboard() {
    /*adding a checking to make sure user is registered*/
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                navigate("/login")
            } else {
                setUser(session.user)
            }
        }
        checkUser()
    }, [navigate])

    return (
        <>
            <div>
                <div>
                    <h1>Welcome to your Dashboard, {user?.user_metadata?.username}!</h1>
                    <button onClick={() => supabase.auth.signOut().then(() => navigate("/login"))}>
                        Logout
                    </button>
                </div>
            </div>
        </>
    )
}
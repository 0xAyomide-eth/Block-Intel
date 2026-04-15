import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../supaBaseClient"
import ChatInterface from "./chatinterface"

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

  let actualUser = user?.user_metadata?.username

    return (
        <>
            <div>
                <div className="Dashboard">
                    <ChatInterface user={actualUser}/>

                </div>
            </div>
        </>
    )
}
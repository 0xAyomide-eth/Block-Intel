export async function sendMessage(userMessage){
    const res = await fetch("http://localhost:3000/chat",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({messages: userMessage})
    })

    if(!res.ok){
        throw new Error("failed to contact the server")
    }

    const data = await res.json()

    return data.reply
}


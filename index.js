
import { useState } from "react";
import axios from "axios";

export default function Home() {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
    
    const sendMessage = async () => {
        const res = await axios.post("https://your-backend-url/chat/", { message, lang: "en" });
        setResponse(res.data.response);
    };

    return (
        <div>
            <h1>AI Chatbot</h1>
            <input type="text" onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
            <p>Response: {response}</p>
        </div>
    );
}

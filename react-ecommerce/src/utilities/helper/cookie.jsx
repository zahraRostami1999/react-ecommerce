import { useState } from 'react';
import { useCookies } from 'react-cookie';



function Cookie() {
    const [username, setUsername] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(["username"]);

    const handleChange = (e) => {
        setUsername(e.target.value);
    }

    const handleSetCookie = () => {
        setCookie("username", username, { path: "/" })
        alert("Cookies has been set")
    }

    const handleRemoveCookie = () => {
        removeCookie("username");
        alert("Cookies has been removed")
    }

    return (
        <>
            <div className='bg-red-500 w-96 h-96'>
                <div>
                    <label htmlFor="userName">Username:</label>
                    <input className='text-orange-800' name='userName' type="text" onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <p>
                        {cookies.username ? cookies.username : "No Cookie Set"}
                    </p>
                    <button onClick={() => handleSetCookie()}>Set Cookie</button>
                    <button onClick={() => handleRemoveCookie()}>Remove Cookie</button>
                </div>
            </div>

        </>
    )
}

export default Cookie;
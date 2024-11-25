import { useState } from 'react';
import { useCookies } from 'react-cookie';



function Cookie() {
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: ""
    })
    const [cookies, setCookie, removeCookie] = useCookies(["userInfo"]);

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        userInfo.username = value;
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        userInfo.password = value;
    }

    const handleSetCookie = () => {
        setCookie("userInfo", userInfo, { path: "/" })
        alert("You logged in successfully")
    }

    const handleRemoveCookie = () => {
        removeCookie("username");
        removeCookie("password");
        userInfo.username = "";
        userInfo.password = "";
        alert("You logged out successfully")
    }

    return (
        <>
            <div className='bg-red-500 w-96 h-96'>
                <div>
                    <label htmlFor="userName">Username:</label>
                    <input className='text-orange-800' name='userName' type="text" onChange={(e) => handleUsernameChange(e)} />
                    <label htmlFor="userName">Password:</label>
                    <input className='text-orange-800' name='userName' type="password" onChange={(e) => handlePasswordChange(e)} />
                </div>
                <div>
                    <p>
                        {cookies.username ? "You're already logged in!" : "You are not logged!"}
                    </p>
                    <button onClick={() => handleSetCookie()}>Login</button>
                    <button onClick={() => handleRemoveCookie()}>Logout</button>
                </div>
            </div>

        </>
    )
}

export default Cookie;
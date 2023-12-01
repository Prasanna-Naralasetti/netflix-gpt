import { useState } from "react"
import Header from "./Header"

const Login = () => {
    const [signIn, setSignIn] = useState(true)
    const toggleClick = () => {
        setSignIn(!signIn)
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="background" />
            </div>
            <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg">
                <h1 className="font-bold text-3xl py-4">{signIn?"Sign In":"Sign Up"}</h1>
                {
                  !signIn && (  <input
                    type="text"
                    placeholder="Full Name"
                    className="p-4 my-4 w-full bg-gray-700"
                />)  
                }
                <input
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-4 w-full bg-gray-700"
                />
                <input
                    type="password"
                    placeholder="password"
                    className="p-4 my-4 w-full bg-gray-700"
                />
                <button className="p-4 my-6 w-full bg-red-700 rounded-lg">{signIn?"Sign In":"Sign Up"}</button>
                <p className="py-4" onClick={toggleClick}>{signIn?"New to Netflix? Sign up now":"already registered sign in"}</p>
            </form>

        </div>
    )
}
export default Login
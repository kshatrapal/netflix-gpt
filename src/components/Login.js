
import { useState } from "react";
import Header from "./Header";

const Login = () =>{

    const [isSingInForm, setIsSignInForm] = useState(true);

    const toggleForm = () =>{
        setIsSignInForm(!isSingInForm);
    }

    return(
        <>
        <Header/>
        <div className="absolute inset-0 bg-black opacity-60 w-full h-full"></div>
        <div  className="w-full h-screen">
            <img className="w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg" alt="loginbg" />
        </div>

        <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-4 bg-black bg-opacity-40 p-8 rounded-md w-80 ">
          <h2 className="text-white text-2xl font-bold">{isSingInForm ? "Sign In" : "Sign Up"} </h2>
          {
                !isSingInForm && (
                    <input type="text" placeholder="Full Name" className="py-2 px-2 bg-black text-white placeholder:text-gray-500 border border-gray-600"/>
                )
            }
            <input type="text" placeholder="email address" className="py-2 px-2 bg-black text-white placeholder:text-gray-500 border border-gray-600"/>
            
            <input type="password" placeholder="password" className="py-2 px-2 bg-black text-white placeholder:text-gray-500 border border-gray-600"/>
            <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded-sm">{isSingInForm ? "Sign In" : "Sign Up"}</button>
            <span onClick={toggleForm} className="cursor-pointer text-white text-sm mt-4 block ">{isSingInForm ? "New to Netflix ? Sign Up now" : "Already have an account ? Sign In now"}</span>
        </form>
        </>
    )
}

export default Login;
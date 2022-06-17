import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OneTimePassword from "./OneTimePassword";
import Login from "./Login";

function LoginPage({ user, requireMfa, loginHandler, logouthandler, loginState }) {
  useEffect(() => {
    console.log(user, requireMfa);
    if(user && !user.mfaEnabled && !requireMfa) {
      toast.warning("Please scan the QR Code")
    }
    if(user && user.username && user.mfaEnabled && !requireMfa) {
      toast.success("Login Successfully!")
    }
    if( user === undefined && !requireMfa) {
      toast.warn("Please Login")
    }
    if( user === undefined && requireMfa) {
      toast.warn("Please enter OTP")
    }
  },[])

  //
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");
  const [authenticate, setAuthenticate] = useState(false);



  return (
    <div className="max-w-7xl mx-auto my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-3">
        <div className="col-span-1">
          
          {/* latest */}
          <div className="flex gap-3 my-5 font-bold text-2xl text-[#00152E]">
            <div className="flex gap-5">
              <div className="flex flex-col">
                <p className={`${!user && !requireMfa ? "opacity-100 text-[#0C77FF]" : "opacity-50"}`}>Username</p>
                <div className={`${!user && !requireMfa ? "bg-[#0C77FF] w-6 h-0.5" : null}`}></div>
              </div>
              <div className="flex flex-col">
                <p className={`${user && user.username || requireMfa ? "opacity-100 text-[#0C77FF]" : "opacity-50"}`}>MFA</p>
                <div className={`${user && user.username || requireMfa ? "bg-[#0C77FF] w-6 h-0.5" : null}`}></div>
              </div>
            </div>
          </div>
            {requireMfa ? (
              <div>
                <h5>Please enter the OTP from authenticator app</h5>
                <OneTimePassword enabled={true} />
              </div>
            ) : !user ? (
              // User not logged in, show login form
              <div>
                  <Login />
              </div>
            ) : (
              // User logged in
              <div>
                <p>Hello, <span className="font-bold text-xl text-purple-600 underline">{user.username}</span></p>
                {user.mfaEnabled ? (
                  <p>Confratulations, multi factor authentication is enabled.</p>
                ) : (
                  <OneTimePassword enabled={false} />
                )}
                <div className="my-5">
                <Link to="/logout" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2" onClick={logouthandler}>
                  Logout
                </Link>
                </div>
                
              </div>
            )}
        </div>
        <div className="col-span-1 w-full h-80 md:w-[420px] md:h-[350px] lg:w-[450px] lg:h-[375px]">
          <div className="flex justify-center items-center">
            {authenticate ? (
              <img src={imageUrl} className="h-full w-5/6" alt="" />
            ) : (              
              ( user && !user.mfaEnabled) ? 
              (
                <img src="/mfa_qr_code"
                className="h-full w-full"
                alt="mfa"
                />
              ) : (
                <img
                  src="/assets/email_phone.png"
                  className="h-full w-full"
                  alt="mfa"
                />
              )              
            )}
          </div>
          <div className="mt-5 md:mt-8 flex flex-col lg:flex-row mx-0 md:ml-10 lg:ml-20 xl:ml-36">
            <p className="ml-1 md:ml-0 mr-2">Need any help?</p>
            <div className="mx-1 uppercase text-[#0C77FF] cursor-pointer">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

import React, { useState } from "react";
import imageIcon from "../assets/email_phone.png";
import arrowIcon from "../assets/arrowSubmit.svg";
import reloadIcon from "../assets/reload.svg";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Authentication() {
  const [phoneActive, setPhoneActive] = useState(true);
  const [emailActive, setEmailActive] = useState(false);
  const [otpVerify, setOtpVerify] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
  });
  const [otpNumber, setOtpNumber] = useState("");

  const { phone, email } = formData;

  const tabChange = (e) => {
    if (e === "phone") {
      if (!phoneActive) {
        setEmailActive(false);
        setOtpVerify(false);
        setOtpNumber("");
        setPhoneActive(true);
      }
    }
    if (e === "email") {
      if (!emailActive) {
        setPhoneActive(false);
        setOtpVerify(false);
        setOtpNumber("");
        setEmailActive(true);
      }
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setOtpVerify(true);
  };
  const otpChange = (e) => {
    setOtpNumber(e.target.value);
  };
  const otpHandler = () => {
    console.log(otpNumber);
  };
  return (
    <div className="flex flex-col items-between 2xl:justify-evenly mb-12 mt-2 md:mt-5 lg:mt-6 xl:mt-8 md:flex-row">
      <div className="flex flex-col justify-between">
        <div className="">
          <div className="text-4xl xl:text-6xl font-bold ">
            <p className="my-4 text-[#00152E]">
              {otpVerify && phoneActive
                ? "Verify your Phone"
                : otpVerify && emailActive
                ? "Verify your Email"
                : "Enter Your Email or"}
            </p>
            <p className="my-4 text-[#00152E]">
              {otpVerify && phoneActive
                ? "Number"
                : otpVerify && emailActive
                ? "Address"
                : "Phone Number"}
            </p>
          </div>
          <div className="text-xl text-[#62626B] md:max-w-fit font-sans my-2">
            <p className="my-2">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text a visual form of a docum commonly the visa
            </p>
            {/* <p className="my-2">
              text a visual form of a docum commonly the visa
            </p> */}
          </div>
          {otpVerify ? null : (
            <div className="flex items-center justify-center md:justify-start my-2 md:my-3 xl:my-5">
              <div className="flex flex-col">
                <h4
                  className={`text-[#00152E] opacity-50 font-bold text-2xl ml-0 mr-1 cursor-pointer ${
                    phoneActive ? "!text-[#0C77FF] !opacity-100" : ""
                  }`}
                  onClick={() => tabChange("phone")}
                >
                  Phone
                </h4>
                {phoneActive ? (
                  <div className="bg-[#0C77FF] w-6 h-0.5"></div>
                ) : null}
              </div>
              <div className="flex flex-col ml-5">
                <h4
                  className={`text-[#00152e] opacity-50 font-bold text-2xl ml-0 mr-1 cursor-pointer ${
                    emailActive ? "!text-[#0C77FF] !opacity-100" : ""
                  }`}
                  onClick={() => tabChange("email")}
                >
                  Email
                </h4>
                {emailActive ? (
                  <div className="bg-[#0C77FF] w-6 h-0.5"></div>
                ) : null}
              </div>
            </div>
          )}
          <div className="my-4 flex flex-col">
            <div className="">
              <form>
                <div className="my-4 flex flex-row items-center">
                  <div className="flex w-80">
                    {phoneActive ? (
                      <>
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-full border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 cursor-pointer">
                          +880
                        </span>
                        <input
                          type="phone"
                          id="phone"
                          name="phone"
                          value={phone}
                          onChange={onChange}
                          className="rounded-none rounded-r-full bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter Phone Number"
                        />
                      </>
                    ) : (
                      <>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={onChange}
                          className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter your Email Address"
                        />
                      </>
                    )}
                  </div>
                  {otpVerify ? (
                    <div className="mt-3 w-24 h-24 overflow-hidden flex justify-center items-center">
                      <img
                        src={reloadIcon}
                        onClick={onSubmit}
                        className="w-24 h-24 cursor-pointer"
                        alt=""
                      />
                    </div>
                  ) : (
                    <div className="mt-3 w-24 h-24 overflow-hidden flex justify-center items-center">
                      <img
                        src={arrowIcon}
                        onClick={onSubmit}
                        className="w-24 h-24 cursor-pointer"
                        alt=""
                      />
                    </div>
                  )}
                </div>
              </form>
            </div>
            {otpVerify ? (
              <div className="mt-0 flex flex-row items-center">
                <div className="w-80">
                  <input
                    type="number"
                    id="otp"
                    name="otp"
                    value={otpNumber}
                    onChange={otpChange}
                    className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your OTP number"
                  />
                </div>
                <div className="mt-3 w-24 h-24 overflow-hidden flex justify-center items-center">
                  {/* <FaArrowAltCircleRight
                    className="w-20 text-[42px] text-[#0C77FF] drop-shadow-2xl cursor-pointer"
                    onClick={otpHandler}
                  /> */}
                  <img
                    src={arrowIcon}
                    className="w-24 h-24 cursor-pointer"
                    alt=""
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="mt-5 md:mt-8 lg:flex-row flex flex-col">
          <p className="ml-0 mr-2">Already have an Account here?</p>
          <div className="ml-0 mr-2 uppercase text-[#0C77FF] cursor-pointer">
            Sign In
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 md:mt-0 mb-5 md:mb-0 justify-between">
        <div className="">
          <img
            src={imageIcon}
            className="w-auto md:w-10/12 cursor-pointer"
            alt="alter"
          />
        </div>
        <div className="mt-5 md:mt-8 flex flex-col lg:flex-row mx-0 md:ml-10 lg:ml-20 xl:ml-36">
          <p className="ml-1 md:ml-0 mr-2">Need any help?</p>
          <div className="mx-1 uppercase text-[#0C77FF] cursor-pointer">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authentication;

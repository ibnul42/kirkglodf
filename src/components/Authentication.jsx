import React, { useState } from 'react';
import imageIcon from '../assets/email_phone.png';
import { FaArrowAltCircleRight } from 'react-icons/fa'

function Authentication() {
    const [phoneActive, setPhoneActive] = useState(true);
    const [emailActive, setEmailActive] = useState(false);
    const [otpVerify, setOtpVerify] = useState(false);
    const [formData, setFormData] = useState({
        phone: "",
        email: "",
    })
    const [otpNumber, setOtpNumber] = useState("");

    const { phone, email } = formData;

    const tabChange = (e) => {
        if (e === 'phone') {
            if (!phoneActive) {
                setEmailActive(false);
                setOtpVerify(false);
                setOtpNumber('');
                setPhoneActive(true);
            }
        }
        if (e === 'email') {
            if (!emailActive) {
                setPhoneActive(false);
                setOtpVerify(false);
                setOtpNumber('');
                setEmailActive(true);
            }
        }

    }

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setOtpVerify(true)
    }
    const otpChange = (e) => {
        setOtpNumber(e.target.value);
    }
    const otpHandler = () => {
        console.log(otpNumber);
    }
    return (
        <div className="flex flex-col items-between mb-12 mt-2 md:mt-8 md:flex-row">
            <div className="flex flex-col justify-between">
                <div className="">
                    <h1 className="text-xl font-bold my-2">Enter Your Email or Phone Number</h1>
                    <p className="text-sm font-sans my-2">In publishing and graphic design, Lorem ipsum is a placeholder text e visual form of a docum commonly the visa</p>
                    <div className="flex items-center justify-center md:justify-start">
                        <h4 className={`text-[#00152E] opacity-50 font-bold text-lg ml-0 mr-1 cursor-pointer ${phoneActive ? '!text-[#0C77FF] border-b-2 border-b-[#0C77FF] !opacity-100' : ''}`}
                            onClick={() => tabChange('phone')}>Phone</h4>
                        <h4 className={`text-[#00152e] opacity-50 font-bold text-lg mx-1 cursor-pointer ${emailActive ? '!text-[#0C77FF] border-b-2 border-b-[#0C77FF] !opacity-100' : ''}`}
                            onClick={() => tabChange('email')}>Email</h4>
                    </div>
                    <div className="my-4 flex flex-col">
                        <div className="">
                            <form >
                                <div className="my-4 flex flex-row items-center">
                                    <div className="flex w-80">
                                        {phoneActive ? (
                                            <>
                                                <span
                                                    className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-full border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 cursor-pointer">
                                                    +880
                                                </span>
                                                <input type="phone"
                                                    id="phone"
                                                    name="phone"
                                                    value={phone}
                                                    onChange={onChange}
                                                    className="rounded-none rounded-r-full bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Enter Phone Number" />
                                            </>
                                        ) :
                                            (
                                                <>
                                                    <input type="email"
                                                        id="email"
                                                        name="email"
                                                        value={email}
                                                        onChange={onChange}
                                                        className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="Enter your Email Address" />
                                                </>
                                            )}
                                    </div>
                                    <div className="">
                                        <FaArrowAltCircleRight onClick={onSubmit} type="submit" className="w-20 text-[42px] text-[#0C77FF] drop-shadow-2xl cursor-pointer" />
                                    </div>
                                </div>
                            </form>

                        </div>
                        {otpVerify ?
                            <div className="my-4 flex flex-row items-center">
                                <div className="w-80">
                                    <input type="number"
                                        id="otp"
                                        name="otp"
                                        value={otpNumber}
                                        onChange={otpChange}
                                        className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter your OTP number" />
                                </div>
                                <div className="">
                                    <FaArrowAltCircleRight
                                        className="w-20 text-[42px] text-[#0C77FF] drop-shadow-2xl cursor-pointer"
                                        onClick={otpHandler}
                                    />
                                </div>
                            </div>
                            : null}
                    </div>
                </div>
                <div className="mt-5 md:mt-20 flex">
                    <p className="ml-0 mr-2">Already have an Account here?</p>
                    <div className="mx-1 uppercase text-[#0C77FF] cursor-pointer">Sign In</div>
                </div>
            </div>
            <div className="flex flex-col mt-10 md:mt-0 mb-5 md:mb-0 justify-between">
                <div className="">
                    <img src={imageIcon} className=" w-auto" alt="alter" />
                </div>
                <div className="mt-5 md:mt-20 flex flex-col md:flex-row mx-0 md:mx-10">
                    <p className="ml-1 md:ml-0 mr-2">Need any help?</p>
                    <div className="mx-1 uppercase text-[#0C77FF] cursor-pointer">Contact Us</div>
                </div>
            </div>
        </div>
    )
}

export default Authentication
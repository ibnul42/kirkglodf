import React, { useCallback, useState } from "react";
import { verifyOtp } from "./api";
import Input from "./Input";
import { toast } from "react-toastify";

export default function OneTimePassword({ enabled }) {
  const [verificationCode, setVerificationCode] = useState("");
  const [invalidCode, setInvalidCode] = useState(false);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const result = await verifyOtp(verificationCode);

      if (result) return (window.location = "/mfa");

      // setInvalidCode(true);
      toast.error("Invalid verification code");
    },
    [verificationCode]
  );

  return (
    <div>
      {!enabled && (
        <div className="my-5">
          <p className="font-bold text-xl">
            Please scan the QR code on your authenticator app
          </p>
          {/* <img src="/mfa_qr_code" /> */}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="items-end grid grid-cols-12 gap-3"
      >
        <div className="col-span-9 md:col-span-7 lg:col-span-6 xl:col-span-5">
          <Input
            id="verificationCode"
            label="Verification code"
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="col-span-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>

        <div className="col-span-3 items-end">
          <svg
            type="submit"
            className="cursor-pointer"
            width="45"
            height="45"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleSubmit}
          >
            <g filter="url(#filter0_d_590_394)">
              <circle cx="19" cy="19" r="15" fill="#5035F5" />
              <path
                d="M13.167 19H24.8337"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 13.1667L24.8333 19L19 24.8334"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_590_394"
                x="0"
                y="0"
                width="38"
                height="38"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_590_394"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_590_394"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          {/* <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 my-3 text-center"
          >
            Verify
          </button> */}
        </div>

        {/* {invalidCode && (
            <p className="text-red-400 my-3 font-bold text-sm md:text-xl">
              Invalid verification code
            </p>
          )} */}
      </form>
      {/* <form onSubmit={""}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Verification code
          </label>
          <input
            type="text"
            placeholder="12345"
            name="text"
            value={"text"}
            // onChange={(e) => setText(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 sm:w-9/12 md:w-8/12 lg:w-1/2"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Verify
        </button>
      </form> */}
    </div>
  );
}

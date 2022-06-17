import React, { useCallback, useState } from "react";
import { login } from "./api";
import Input from "./Input";
import { toast } from "react-toastify";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const res = await login(username, password);

      // For simplicity, we refresh the page after authenticating
      // and let app handle the flow
      if (res.user) return (window.location = "/mfa");

      toast.error("Invalid credentials");
      // setInvalidCredentials(true);
    },
    [username, password]
  );
  const onSubmitUsername = (e) => {
    e.preventDefault();
    // toast.warning("Wait");
    // dispatch(login(formData));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <p className="font-bold text-xl md:text-2xl lg:text-3xl my-4 text-[#00152E]">
            Please Enter your credential
          </p>
          <p className="text-[#62626B]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
            doloribus! Recusandae repudiandae necessitatibus modi, ea autem
            fugiat porro pariatur? Molestiae in sed temporibus, quidem explicabo
            facilis deserunt totam molestias sequi!
          </p>
        </div>
        <div className="mb-6">
          <Input
            id="username"
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 sm:w-9/12 md:w-8/12 lg:w-1/2"
          />
        </div>
        <div className="mb-6">
          <Input
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 sm:w-9/12 md:w-8/12 lg:w-1/2"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Log in
        </button>

        {/* {invalidCredentials && <p>Invalid credentials</p>} */}
      </form>
    </>
  );
}

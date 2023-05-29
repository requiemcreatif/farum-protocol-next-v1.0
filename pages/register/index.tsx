import React, { useState, useCallback } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import FormInput from "../../components/formInput/FormInput";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("Register");

  const [action, setAction] = useState("login");
  const toggleAction = useCallback(() => {
    setAction((prev) => (prev === "login" ? "register" : "login"));
  }, []);

  return (
    <div className="  max-w-5xl mx-auto mt-20">
      <div className=" text-center">
        <h2 className=" text-6xl mb-10 font-bold">
          {action === "register" ? "Register" : "Login"}
        </h2>
        <p className=" px-20 mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
          aliquid, atque iusto eligendi enim illo blanditiis est
        </p>
      </div>
      <div>
        {action === "register" ? (
          <div>
            <div className=" grid lg:grid-cols-2">
              <FormInput
                id="firstName"
                label="First Name"
                type="text"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />
              <FormInput
                id="lastName"
                label="Last Name"
                type="text"
                value={lastName}
                onChange={(e: any) => setLastName(e.target.value)}
              />
            </div>

            <FormInput
              id="company"
              label="company"
              type="text"
              value={company}
              onChange={(e: any) => setCompany(e.target.value)}
            />
            <FormInput
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <FormInput
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />

            <FormInput
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e: any) => setConfirmPassword(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <FormInput
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <FormInput
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>
        )}

        <div className=" p-5">
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
              <label className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300">
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-10 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <p className=" text-neutral-500 mt-12">
            {action === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
            <span
              onClick={toggleAction}
              className=" text-black ml-1 hover:underline cursor-pointer"
            >
              {action === "login" ? " Create an account" : " Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

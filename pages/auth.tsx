import Input from "@/components/Input";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import axios from "axios";
import netflixLogo from "@/public/images/logo.png";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register",{
        email,
        name,
        password
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className='relative h-full w-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'>
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          {/* <img src="/images/logo.png" alt="Logo" className="h-12 " /> */}
          <Image src={netflixLogo} alt="Logo" className="h-12 w-52 " />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black  bg-opacity-70 py-16 px-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  onChange={(ev: any) => setName(ev.target.value)}
                  id="name"
                  value={name}
                  type="text"
                />
              )}

              <Input
                label="Email"
                onChange={(ev: any) => setEmail(ev.target.value)}
                id="name"
                value={email}
                type="email"
              />
              <Input
                label="Password"
                onChange={(ev: any) => setPassword(ev.target.value)}
                id="password"
                value={password}
                type="password"
              />
            </div>
            <button className="bg-red-600 rounded-md text-white py-3 w-full mt-10 hover:bg-red-700 transition ">
              {variant === "login" ? "Login" : "Sign Up"}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? " First time using Netflix ?"
                : "Already have an account ?"}
              <span
                onClick={toggleVariant}
                className=" text-white text-sm ml-1 hover:underline cursor-pointer"
              >
                {variant === "register" ? " Login" : "Create an account"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

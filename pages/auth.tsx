import Input from "@/components/Input";
import Image from "next/image";
import React, { useState } from "react";
import netflixLogo from "@/public/images/logo.png";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='relative h-full w-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'>
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          {/* <img src="/images/logo.png" alt="Logo" className="h-12 " /> */}
          <Image src={netflixLogo} alt="Logo" className="h-12 w-auto " />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black  bg-opacity-70 py-16 px-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign in</h2>
            <div className="flex flex-col gap-4">
              <Input
                label="Username"
                onChange={(ev: any) => setName(ev.target.value)}
                id="name"
                value={name}
                type="text"
              />
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
          </div>
        </div>
      </div>
    </div>
  );
}

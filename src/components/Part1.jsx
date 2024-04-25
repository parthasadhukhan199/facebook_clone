import React from "react";
import logo from "../assets/fblogo.svg";

export default function Part1() {
  return (
    <>
      <div className="container mt-40 mx-auto flex items-center justify-center">
        <div className="left w-[70vh] mr-20">
          <img className="w-80" src={logo} alt="" />
          <h1 className="text-3xl mx-8">
            Facebook helps you connect and share with the people in your life.
          </h1>
        </div>
       
          <div className="right flex flex-col bg-white w-2/5 py-8 px-4 shadow-2xl rounded-lg xl:w-1/4 ">
            <input
              className="px-3 h-10 m-1 mx-1 border-2 border-gray-200 rounded-lg outline-blue-500 "
              type="text"
              name=""
              id=""
              placeholder="Email assress or phone number"
            />
            <input
              className="px-3 h-10 m-1 mx-1 border-2 border-gray-200 rounded-lg outline-blue-500 "
              type="password"
              name=""
              id=""
              placeholder="password"
            />
            <button className=" w-full bg-blue-500 p-1 rounded-lg text-white my-2 hover:bg-blue-600">
              Log in{" "}
            </button>
            <span className="text-blue-500 cursor-pointer text-center text-sm my-3 hover:underline">
              forget password ?
            </span>
            <hr />
            <button className="w-2/3 mx-auto  bg-green-500 p-1 rounded-lg text-white my-2 hover:bg-green-600">
              create new account
            </button>
          </div>
          
      </div>
    </>
  );
}

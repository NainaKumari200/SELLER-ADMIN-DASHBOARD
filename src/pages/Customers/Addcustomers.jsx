import React, { useState } from "react";
import Topbar2 from "../../layouts/Topbar2";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineSend } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function FFormElementsInputPlainLgRequired() {
  const navigate = useNavigate();

  return (
    <>
      <Topbar2 />
      <div className="bg-white">
        <div className="flex justify-between">
          <div className="font-bold m-5 flex items-center text-lg">
            <SiHomeassistantcommunitystore className="mr-2" />
            Add Customer
          </div>

          {/* Close */}
          <div className="flex mr-4">
            <div
              className="flex items-stretch my-4 focus:bg-gray-900"
              onClick={() => {
                navigate("../customers");
              }}
            >
              <button className="flex bg-gray-700 p-1 hover:bg-gray-900 text-white text-md items-center px-4 rounded-full focus:outline-none  ">
                <AiOutlineClose className="mr-2 scale-125 border bg-white rounded-full fill-gray-900" />
                Close
              </button>
            </div>
          </div>
        </div>

        {/* Input Fields */}
        <div className="ml-5 font-semibold text-lg">Basic Information</div>
        <div className="ml-5 mt-5 flex flex-col gap-5">
          <div className="w-[20%]">
            <label className="block mb-2">Full Name</label>
            <input
              class="input-field gap-5"
              type="text"
              placeholder="Enter Business name"
            />
          </div>
          <div className="w-[20%]">
            <label className="block mb-2">E-Mail</label>
            <input
              class="input-field"
              type="email"
              placeholder="name@gmail.com"
            />
          </div>
          <div className="w-[20%]">
            <label className="block mb-2">Contact no.</label>
            <input
              class="input-field"
              type="tel"
              placeholder="+91 - 7983163574"
            />
          </div>
        </div>
      
        <div className="ml-5 mt-5 flex flex-col gap-5">
          <div>
            <label className="block mb-2">Country</label>
            <select name="Country" id="" className="mr-20">
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="America">America</option>
              <option value="Canada">Canada</option>
            </select>
          </div>
          <div className="w-[20%]">
            <label className="block mb-2">State</label>
            <input class="input-field" type="text" placeholder="State" />
          </div>
          <div className="w-[20%]">
            <label className="block mb-2">District</label>
            <input class="input-field" type="text" placeholder="District" />
          </div>
        </div>
     
        {/* Submit Button */}
        <div
          className="flex items-stretch m-5 focus:bg-gray-900"
          onClick={() => {
            navigate("../customers");
          }}
        >
          <button className="flex bg-gray-700 p-1 hover:bg-gray-900 text-white text-md items-center px-4 rounded-full focus:outline-none  ">
            Submit
            <MdOutlineSend className="ml-2 scale-125  fill-white" />
          </button>
        </div>
      </div>
    </>
  );
}

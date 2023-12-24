"use client";
import { useState } from "react";

const LinkGenerator = () => {
  const [link, setLink] = useState("");
  const [error, setError] = useState(false);

  const takeInput = (e) => {
    setLink(e.target.value);
    setError(false);
  };

  const generateShortURL = () => {
    if (link === "" || link === null) {
      setError(true);
    }
  };
  return (
    <div className="w-[95%] lg:w-[80%] lg:absolute  lg:top-[100%] bg-primary-violet  bg-[url('/assets/bg-boost-desktop.svg')] p-10 lg:p-20 rounded ">
      <div className="relative">
        <div className="flex items-center gap-x-2">
          <input
            type="text"
            placeholder="Shrink your links here..."
            value={link}
            onChange={(e) => takeInput(e)}
            className={`py-3 px-4 flex-1 rounded outline-none border placeholder:tracking-[2px] ${
              error ? "border-red-500" : "border-transparent"
            } `}
          />
          <button
            onClick={generateShortURL}
            className="py-3 px-4 text-white font-medium bg-primary-cyan hover:bg-opacity-80  border border-transparent rounded tracking-[2px]"
          >
            Shrink it
          </button>
        </div>
        {error && <p className="text-red-500 absolute tracking-[2px] mt-1 text-[14px] ">Please add a valid link!</p>}
      </div>
    </div>
  );
};

export default LinkGenerator;

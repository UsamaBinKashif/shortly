"use client";
import clsx from "clsx";
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
    <div className="w-[95%] rounded bg-primary-violet  bg-[url('/assets/bg-boost-desktop.svg')] p-10  lg:absolute lg:top-[100%] lg:w-[80%] lg:p-20 ">
      <div className="relative">
        <div className="flex items-center gap-x-2">
          <input
            type="text"
            placeholder="Shrink your links here..."
            value={link}
            onChange={(e) => takeInput(e)}
            className={clsx(
              "flex-1 rounded border px-4 py-3 outline-none placeholder:tracking-[2px]",
              error ? "border-red-500" : "border-transparent",
            )}
          />
          <button
            onClick={generateShortURL}
            className="rounded border border-transparent bg-primary-cyan px-4 py-3  font-medium tracking-[2px] text-white hover:bg-opacity-80"
          >
            Shrink it
          </button>
        </div>
        {error && (
          <p className="absolute mt-1 text-[14px] tracking-[2px] text-red-500 ">
            Please add a valid link!
          </p>
        )}
      </div>
    </div>
  );
};

export default LinkGenerator;

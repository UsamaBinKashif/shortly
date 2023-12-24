"use client";

import clsx from "clsx";
import { useState } from "react";

const Link = ({ link }) => {
  const [linkCopied, setLinkCopied] = useState(false);

  const copyLinkToClipboard = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 3000); // Reset copied state after 3 seconds
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

const shrinkedLink = `https://rel-ink.vercel.app/${link.shortId}`

  return (
    <div className="flex lg:items-center rounded gap-x-2 bg-white p-4 flex-col lg:flex-row items-start">
      <div className="lg:flex-1">
        <h3 className="text-primary-violet text-[14px]  lg:text-[16px] tracking-[2px]">
          {link.redirectUrl}
        </h3>
      </div>
      <div className="flex gap-x-2 items-start lg:items-center flex-col lg:flex-row gap-y-2 ">
        <a href={shrinkedLink} target="_blank"  className="text-primary-cyan text-[14px]  lg:text-[16px] tracking-[2px]">
        {shrinkedLink}
        </a>
        <button
          onClick={() =>
            copyLinkToClipboard(shrinkedLink)
          }
          className={clsx("p-1 text-[12px] lg:text-[16px] lg:py-2 lg:px-6 w-[120px] text-white font-medium hover:bg-opacity-80  border border-transparent rounded tracking-[2px]", linkCopied ? "bg-primary-violet" : "bg-primary-cyan")}
          
        >
          {linkCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default Link;

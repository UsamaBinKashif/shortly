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

  const shrinkedLink = `https://rel-ink.vercel.app/${link.shortId}`;
  const truncatedUrl =
    link?.redirectUrl?.length > 40
      ? `${link?.redirectUrl?.slice(0, 40)}...`
      : link?.redirectUrl;
 

  return (
    <div className="flex flex-col items-start gap-x-2 gap-y-2 lg:gap-y-0 rounded bg-white p-4 lg:flex-row lg:items-center">
      <div className="lg:flex-1">
        <h3 className="text-[12px] tracking-[2px]  text-primary-violet lg:text-[16px]" title={link?.redirectUrl}>
          {truncatedUrl}
        </h3>
      </div>
      <div className="flex flex-col items-start gap-x-2 gap-y-2 lg:flex-row lg:items-center ">
        <a
          href={shrinkedLink}
          target="_blank"
          className="text-[12px] tracking-[2px]  text-primary-cyan lg:text-[16px]"
        >
          {shrinkedLink}
        </a>
        <button
          onClick={() => copyLinkToClipboard(shrinkedLink)}
          className={clsx(
            "w-[120px] rounded border border-transparent p-1 text-[12px] font-medium tracking-[2px] text-white  hover:bg-opacity-80 lg:px-6 lg:py-2 lg:text-[16px]",
            linkCopied ? "bg-primary-violet" : "bg-primary-cyan",
          )}
        >
          {linkCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default Link;

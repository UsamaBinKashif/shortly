import { dummyLinks } from "@/app/lib/constants";
import React from "react";
import Link from "./Link";
// import { getData } from "@/app/lib/action";

const LinkContainer = async () => {
    // const links = await getData()
    
  return (
    <div className="scrollbar-hide my-5 flex w-[95%] flex-col gap-y-4 bg-transparent px-4 lg:absolute  lg:top-[135%] lg:h-[55%] lg:w-[80%] lg:overflow-y-scroll lg:px-0">
      {dummyLinks.map((link, index) => (
        <Link link={link} key={index} />
      ))}
    </div>
  );
};

export default LinkContainer;

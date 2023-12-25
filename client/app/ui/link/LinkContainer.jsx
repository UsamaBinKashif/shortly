"use client"
import Link from "./Link";
import { useSelector } from "react-redux";

const LinkContainer =  () => {
  const { links } = useSelector((state) => state.url);
  console.log(links)
  return (
    <div className="my-5 flex w-[100%] flex-col gap-y-4 bg-transparent px-4 scrollbar-hide lg:absolute  lg:top-[135%] lg:h-[55%] lg:w-[80%] lg:overflow-y-scroll lg:px-0">
      {links.map((link, index) => (
        <Link link={link.data} key={index} />
      ))}
    </div>
  );
};

export default LinkContainer;

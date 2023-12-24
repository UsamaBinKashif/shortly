import React from "react";

const Hero = () => {
  return (
    <section className="pt-20 bg-white h-dvh">
      <div className="max-w-screen-xl mx-auto  gap-x-12 items-center justify-between overflow-hidden md:flex md:pl-7">
        <div className="flex-none space-y-2 px-4  md:px-0  max-w-lg tracking-[2px]">
          <h2 className="text-[40px] text-neutral-dark-blue  font-bold   md:text-[60px] leading-[65px] ">
            More than just shorter links.
          </h2>
          <p className="text-neutral-grayish-violet  "> 
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          {/* <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <a
              href="javascript:void(0)"
              className="block py-2 px-4 text-center text-white font-medium bg-primary-cyan duration-150 hover:bg-opacity-80  rounded shadow-lg hover:shadow-none"
            >
            Get started
            </a>
         
          </div> */}
        </div>
        <div className=" lg:block hidden flex-none lg:mt-14 md:mt-0 md:max-w-xl">
          <img
            src="/assets/illustration-working.svg"
            
            alt="working-person"
          />
        </div>
      </div>
    
    </section>
  );
};

export default Hero;

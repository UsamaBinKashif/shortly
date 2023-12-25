import { statistics } from "@/app/lib/constants";
import React from "react";
import StatisticsCard from "./StatisticsCard";

const StatisticsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center pb-10 ">
      <div class="mb-10 flex w-[85%]  flex-col text-center">
        <h1 class="title-font mb-4 text-2xl font-medium text-primary-violet lg:text-4xl">
          Advanced Statistics
        </h1>
        <p class="mx-auto text-lg leading-relaxed lg:w-1/2 text-neutral-grayish-violet">
          {" "}
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row relative">
        <>
          {statistics.map((statistic) => (
            <StatisticsCard statistics={statistic} />
          ))}
          <div className="absolute h-4 w-[50%] bg-primary-cyan z-[-100] top-[50%] left-[50%] translate-x-[-50%] lg:block hidden"></div>
        </>
      </div>
    </section>
  );
};

export default StatisticsSection;

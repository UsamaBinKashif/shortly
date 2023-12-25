import { statistics } from "@/app/lib/constants";
import React from "react";
import StatisticsCard from "./StatisticsCard";

const StatisticsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center pb-32 ">
      <div className="mb-10 flex w-[85%]  flex-col text-center">
        <h1 className="title-font mb-4 text-2xl font-medium text-primary-violet lg:text-4xl">
          Advanced Statistics
        </h1>
        <p className="mx-auto text-lg leading-relaxed text-neutral-grayish-violet lg:w-1/2">
          {" "}
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="relative flex flex-col lg:flex-row">
        <>
          {statistics.map((statistic, index) => (
            <StatisticsCard statistics={statistic} key={index} />
          ))}
          <div className="absolute left-[50%] top-[50%] z-[-100] hidden h-4 w-[50%] translate-x-[-50%] bg-primary-cyan lg:block"/>
        </>
      </div>
    </section>
  );
};

export default StatisticsSection;

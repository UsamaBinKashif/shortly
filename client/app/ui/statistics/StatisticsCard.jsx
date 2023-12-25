import clsx from "clsx";

const StatisticsCard = ({ statistics }) => {
  return (
    <div
      className={clsx(
        "relative mx-auto h-[50%] w-[90%] rounded bg-white p-4 lg:w-[30%]",
        statistics.margin,
      )}
    >
      <div className="-top-8 left-[50px] z-[100px] flex h-[50px] w-[50px] items-center justify-center rounded-[100%] bg-primary-violet p-2 lg:absolute lg:h-[70px] lg:w-[70px] ">
        <img src={statistics.logo} alt={`${statistics.title}-logo`} />
      </div>
      <div className="relative  overflow-hidden rounded-lg  p-6 mt-3 ">
        <h1 className=" mb-3 text-xl font-semibold text-primary-violet sm:text-2xl">
          {statistics.title}
        </h1>
        <p className=" text-neutral-grayish-violet">{statistics.desc}</p>
      </div>
    </div>
  );
};

export default StatisticsCard;

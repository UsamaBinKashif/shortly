const CTASection = () => {
  return (
    <section className="relative bg-primary-violet  bg-[url('/assets/bg-boost-desktop.svg')] py-10 ">
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 md:px-8 md:text-center">
        <p className="text-3xl font-semibold text-white sm:text-4xl">
          Boost your links today
        </p>

        <div className="mt-4">
          <a
            href="#"
            className="inline-block rounded bg-primary-cyan px-4 py-2 font-medium text-primary-violet duration-150 hover:bg-opacity-90 "
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

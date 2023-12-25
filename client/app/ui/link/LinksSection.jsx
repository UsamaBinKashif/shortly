import LinkContainer from "./LinkContainer";
import LinkGenerator from "./LinkGenerator";

const LinksSection = () => {
  return (
    <section className="flex lg:h-dvh flex-col items-center py-20 ">
      <LinkGenerator />
      <LinkContainer />
    </section>
  );
};

export default LinksSection;

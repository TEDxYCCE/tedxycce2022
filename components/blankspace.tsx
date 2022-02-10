import Link from "next/link";
import Button from "./button";

const BlankSpace = () => {
  return (
    <section className="container px-4 lg:px-8 flex flex-col justify-center lg:py-56 mx-auto text-center text-white">
      <p className="py-4 text-3xl">Seems like you found a baby space...</p>
      <p className="my-6 mb-12 text-lg">
        We are working on this area, <br />
        Check back later to see more!
      </p>
      <div>
        <Button variant="outlined" href={"/"} noRightArrow>
          Go Home
        </Button>
      </div>
    </section>
  );
};

export default BlankSpace;

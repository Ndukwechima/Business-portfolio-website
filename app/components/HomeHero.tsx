import React from "react";
import Button from "./share/Button";
import Image from "next/image";
import heroImage from "@/public/assets/images/usher.png";
import frame from "@/public/assets/images/frame.png";
import { useRouter } from "next/navigation";

const HomeHero = () => {
  const router = useRouter();

  const handleNavigateToConnect = () => {
    router.push("/let-connect");
  };
  return (
    <section
      className="relative grid overflow-hidden w-full h-max md:h-screen  lg:px-16 bg-PrimaryBlue bg-cover bg-bottom bg-no-repeat md:bg-center p-0"
      style={{ backgroundImage: `url(${frame.src})` }}
    >
      <div className="grid h-[5vh] md:h-[10vh] "></div>
      {/* left side */}
      <div className="w-full md:w-[60%] px-4">
        <h1 className="w-full text-white text-[40px] md:text-[60px] font-semibold leading-8 md:leading-[60px]">
          <p>{`I don't just coach`}</p>
          <p>{`products; I enpower`}</p>
          <p>{`people to build`}</p>
          <p>{`their vision`}</p>
        </h1>
        <p className="w-full md:w-4/5 text-white my-8">
          {`Over the years, I’ve trained and guided thousands of professionals
            and a couple of businesses to find clarity, scale impact, and
            achieve results. Whether you’re an individual seeking growth, a team
            in need of direction, or a company aiming to level up, this is the
            place where transformation begins.`}
        </p>
        <div className="w-full py-8 md:w-[350px]">
          <Button
            onClick={handleNavigateToConnect}
            variant="primary"
            width="100%"
            height="100%"
            className="rounded-[8px] py-4"
          >
            {`Let's connect`}
          </Button>
        </div>
      </div>
      {/* right side */}

      <div className="grid place-items-baseline h-[350px] static md:absolute md:h-full w-full md:w-1/2 right-0 -bottom-[5vh] ">
        <Image
          src={heroImage}
          alt="home-profile"
          fill
          priority
          className="hidden md:block"
        />
        <Image
          src={heroImage}
          alt="home-profile"
          height={400}
          width={500}
          priority
          className="md:hidden"
        />
      </div>
    </section>
  );
};

export default HomeHero;
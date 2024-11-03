import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="relative w-full bg-gradient-to-r from-teal-400 to-yellow-200 overflow-hidden">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-teal-300 p-1">
            <div className="rounded-full bg-yellow-200 p-1 px-2">
              <p className="text-sm font-medium">You Travel</p>
            </div>
            <p className="text-sm font-medium"> We plan&rarr;</p>
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
          Explore the World Without Hassle :)
          </h1>
          <p className="mt-6 text-lg text-gray-700">
          Advanced AI travel planner providing customized itineraries and perfecting every detail!
          </p>
          <br />
          <Link to={"/create-trip"}>
            {" "}
            <Button>Get Started!</Button>
          </Link>
        </div>

        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="mt-16 rounded-lg aspect-[3/2] from-teal-400 to-yellow-200 object-cover lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9] p-4 "
            src="/pexels-apasaric-1285625.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

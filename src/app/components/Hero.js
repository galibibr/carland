"use client";

import { useContext } from "react";

// components
import Search from "./Search";

// contaxt
import { SearchContext } from "../context/search";

// next image
import Image from "next/image";

// motion
import { motion, easeInOut } from "framer-motion";

// variants
import { fadeIn } from "../../../variants";

export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        {/* text & img wrapper */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          {/* text */}
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h1">
              Explore the Finest <span className="text-accent">Global</span>{" "}
              0ffers
            </motion.h1>
            <p className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10">
              Find your ideal ride for any adventure with our diverse range of
              affordable and dependaable car rentals.
            </p>
            {/* btns */}
            <div className="flex gap-x-3 justify-center xl:justify-start">
              {/* btn app store */}
              <button className="btn-cta">
                <Image
                  src={"/icons/buttons/app-store.svg"}
                  width={132}
                  height={36}
                  alt="google play"
                />
              </button>
              {/* btn play market */}
              <button className="btn-cta">
                <Image
                  src={"/icons/buttons/google-play.svg"}
                  width={132}
                  height={36}
                  alt="google play"
                />
              </button>
            </div>
          </div>
          {/* img car*/}
          <div className="relative w-full h-full max-w-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px]:right-[120px] xl:top-48">
            <Image
              src={"/images/hero/car.svg"}
              fill
              alt="car"
              style={{ objectFit: "contain" }}
              property=""
            />
          </div>
        </div>
      </div>
      {searchActive ? (
        <div className="fixed top-[80px] z-10 w-full max-w-[1920px]">
          <Search />
        </div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <Search />
        </div>
      )}
    </section>
  );
}

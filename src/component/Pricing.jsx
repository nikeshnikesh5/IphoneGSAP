import React from "react";
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";

import { LeftCurve, RightCurve } from "./design/Collaboration";
import PricingListing from "./PricingListing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            alt="sphere "
            className="relative z-1"
            width={225}
            height={255}
          />
          <div
            className="absolute top-1/2 left-1/2 w-16rem -translate-x-1/2
          pointer-events-none
          "
          >
            <img
              src={stars}
              alt="Star"
              className="w-full"
              width={950}
              height={400}
            />
          </div>
        </div>
        <Heading
          tag="Get started with Brainwave"
          title="Pay once use for ever "
        />

        <div className="relative">
          <LeftCurve />
          <RightCurve />
          <PricingListing />
        </div>
      </div>
    </Section>
  );
};

export default Pricing;

"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout250() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
            <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              Discover Stunning Properties with Exceptional Features and
              Amenities
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Explore Our Comprehensive Listings Tailored to Your Dream Home
            </h3>
            <p>
              Experience the luxury of high-quality property photos that
              showcase every detail.
            </p>
            <div className="mt-6 flex gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                View
              </Button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Take a Virtual Tour of Your Future Home Today
            </h3>
            <p>
              Immerse yourself in our virtual tours for an interactive home
              viewing experience.
            </p>
            <div className="mt-6 flex gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Tour
              </Button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Detailed Property Descriptions to Help You Make Informed Decisions
            </h3>
            <p>
              Our detailed descriptions provide insights into features, pricing,
              and neighborhood highlights.
            </p>
            <div className="mt-6 flex gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Learn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

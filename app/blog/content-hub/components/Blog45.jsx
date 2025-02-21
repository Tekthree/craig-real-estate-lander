"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Blog45() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Essential Home Buying Tips
            </h2>
            <p className="md:text-md">
              Navigate the home buying process with confidence.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-x-12">
          <div>
            <a href="#" className="mb-5 block sm:mb-6">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full object-cover"
                />
              </div>
            </a>
            <a href="#" className="mb-2 mr-4 max-w-full text-sm font-semibold">
              Tips
            </a>
            <a href="#" className="mb-2 block max-w-full">
              <h5 className="text-xl font-bold md:text-2xl">
                Top Strategies for Home Buyers
              </h5>
            </a>
            <p>Learn how to make informed decisions when buying a home.</p>
            <div className="mt-5 flex items-center sm:mt-6">
              <div className="mr-4 shrink-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder avatar"
                  className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="text-sm font-semibold">John Doe</h6>
                <div className="flex items-center">
                  <p className="text-sm">11 Jan 2022</p>
                  <span className="mx-2">•</span>
                  <p className="text-sm">5 min read</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="#" className="mb-5 block sm:mb-6">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-video size-full object-cover"
                />
              </div>
            </a>
            <a href="#" className="mb-2 mr-4 max-w-full text-sm font-semibold">
              Advice
            </a>
            <a href="#" className="mb-2 block max-w-full">
              <h5 className="text-xl font-bold md:text-2xl">
                Selling Your Home Successfully
              </h5>
            </a>
            <p>Discover effective strategies to sell your home quickly.</p>
            <div className="mt-5 flex items-center sm:mt-6">
              <div className="mr-4 shrink-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder avatar"
                  className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="text-sm font-semibold">Jane Smith</h6>
                <div className="flex items-center">
                  <p className="text-sm">11 Jan 2022</p>
                  <span className="mx-2">•</span>
                  <p className="text-sm">5 min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center md:mt-20">
          <Button variant="secondary">View all</Button>
        </div>
      </div>
    </section>
  );
}

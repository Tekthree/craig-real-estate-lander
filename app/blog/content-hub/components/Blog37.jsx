"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Blog37() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Latest Market Insights
            </h2>
            <p className="md:text-md">
              Stay updated with Denver's real estate trends.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div>
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
              </div>
            </a>
            <a
              href="#"
              className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
            >
              Market
            </a>
            <a href="#" className="mb-2 block max-w-full">
              <h5 className="text-xl font-bold md:text-2xl">
                Understanding Denver's Housing Market
              </h5>
            </a>
            <p>
              Explore the latest trends and statistics in Denver's real estate
              market.
            </p>
            <div className="mt-6 flex items-center">
              <div className="mr-4 shrink-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder avatar"
                  className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="text-sm font-semibold">Jane Doe</h6>
                <div className="flex items-center">
                  <p className="text-sm">11 Jan 2022</p>
                  <span className="mx-2">•</span>
                  <p className="text-sm">5 min read</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
              </div>
            </a>
            <a
              href="#"
              className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
            >
              Market
            </a>
            <a href="#" className="mb-2 block max-w-full">
              <h5 className="text-xl font-bold md:text-2xl">
                Tips for First-Time Buyers
              </h5>
            </a>
            <p>Essential advice for navigating your first home purchase.</p>
            <div className="mt-6 flex items-center">
              <div className="mr-4 shrink-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder avatar"
                  className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="text-sm font-semibold">John Smith</h6>
                <div className="flex items-center">
                  <p className="text-sm">15 Jan 2022</p>
                  <span className="mx-2">•</span>
                  <p className="text-sm">4 min read</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
              </div>
            </a>
            <a
              href="#"
              className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
            >
              Tips
            </a>
            <a href="#" className="mb-2 block max-w-full">
              <h5 className="text-xl font-bold md:text-2xl">
                Navigating the Denver Market
              </h5>
            </a>
            <p>
              Key strategies for success in the competitive Denver real estate
              market.
            </p>
            <div className="mt-6 flex items-center">
              <div className="mr-4 shrink-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder avatar"
                  className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="text-sm font-semibold">Emily Johnson</h6>
                <div className="flex items-center">
                  <p className="text-sm">20 Jan 2022</p>
                  <span className="mx-2">•</span>
                  <p className="text-sm">6 min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Button
            title="View all"
            variant="secondary"
            className="mt-10 md:mt-14 lg:mt-16"
          >
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}

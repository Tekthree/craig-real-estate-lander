"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Here are some common questions about our blog topics and real estate
            insights.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is a buyer's agent?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              A buyer's agent represents the interests of the home buyer. They
              provide valuable insights into the market, negotiate on behalf of
              the buyer, and guide them through the purchasing process. Having a
              dedicated agent can significantly enhance your home buying
              experience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              How to prepare for selling?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Preparing to sell your home involves several key steps. Start by
              decluttering and staging your space to make it more appealing.
              Additionally, consider obtaining a pre-sale home inspection to
              identify any potential issues.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is closing costs?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Closing costs are fees associated with finalizing a real estate
              transaction. These can include loan origination fees, title
              insurance, and appraisal costs. It's essential to budget for these
              expenses when buying or selling a home.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              How to find listings?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Finding listings can be done through various channels, including
              real estate websites and local agents. Utilizing advanced search
              tools can help you filter properties based on your preferences.
              Additionally, staying connected with your agent can provide you
              with the latest listings.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is earnest money?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Earnest money is a deposit made to demonstrate a buyer's serious
              intent to purchase a property. This amount is typically held in
              escrow and applied to the buyer's closing costs. It's a crucial
              part of the offer process.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">Reach out to us for more information.</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

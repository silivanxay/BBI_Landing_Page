import React from "react";

export const CTA = () => {
  return (
    <div>
      <section
        className="py-20 md:py-28 bg-white"
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundPosition: "center",
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-4 text-3xl md:text-4xl font-heading font-bold">
              The fastest way from idea to live site. Period.
            </h2>
            <p className="mb-6 text-lg md:text-xl font-heading font-medium text-coolGray-500">
              Flex is a Small SaaS Business. Flex isn`t a traditional company.
              We believe a diverse team, approaches to work and transparency are
              key to our success.
            </p>
            <a
              className="inline-block py-3 px-7 w-full md:w-auto text-lg leading-7 text-yellow-50 bg-yellow-500 hover:bg-yellow-600 font-medium text-center focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

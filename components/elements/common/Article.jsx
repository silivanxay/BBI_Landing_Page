import React from "react";
import classNames from "classnames";
import Image from "next/image";
export default function Article(props) {
  const { content, className } = props;
  return (
    <>
      <span className="inline-block px-2 py-px mb-4 text-xs leading-5 uppercase bg-yellow-500 text-gray-700 rounded-9xl">
        {content.header}
      </span>
      <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-gray-700 md:text-2xl lg:text-6xl dark:text-white">
        {content.headline}
      </h1>
      <ul>
        {content.context.map((item, index) => (
          <li key={index}>
            <span className="inline-flex">
              {item.icon ? (
                <div className="mr-8">
                  <Image
                    className="rounded-full"
                    src={item.icon}
                    alt="image"
                    width={35}
                    height={35}
                  />
                </div>
              ) : (
                <></>
              )}
              <p
                className={classNames(
                  "mb-8 text-lg font-medium md:text-xl text-coolGray-500 dark:text-white",
                  className
                )}
              >
                {item.text}
              </p>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

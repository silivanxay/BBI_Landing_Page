import React from 'react';
import classNames from 'classnames';

export default function Article(props) {
  const { content, className } = props;
  return (
    <>
      <span className="inline-block px-2 py-px mb-4 text-xs leading-5 uppercase bg-yellow-500 v text-yellow-50 rounded-9xl">
        {content.header}
      </span>
      <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-yellow-500 md:text-5xl lg:text-6xl dark:text-white">
        {content.headline}
      </h1>
      <ul>
        {content.context.map((item, index) => (
          <li key={index}>
            <span className="inline-flex" >
              {item.icon ? (
                <img
                  src={item.icon}
                  className="w-8 h-8 bg-white rounded-full"
                />
              ) : (
                <></>
              )}
              <div className="w-8"></div>
              <p
                className={classNames(
                  'mb-8 text-lg font-medium md:text-xl text-coolGray-500 dark:text-white',
                  className
                )}
              >
                {item.text}
              </p>
              <div className="w-8"></div>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

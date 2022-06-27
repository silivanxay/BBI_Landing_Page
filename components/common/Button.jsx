import React from 'react';
import classNames from 'classnames';

export default function Button(props) {
  const { className, children } = props;
  return (
    <a
      className={classNames(
        'inline-block px-4 py-2 text-sm font-medium leading-5 bg-yellow-500 rounded-md text-yellow-50 hover:bg-yellow-600 first-line focus:ring-opacity-50 focus:ring-2 focus:ring-yellow-500',
        className
      )}
      href="#"
    >
      {children}
    </a>
  );
}

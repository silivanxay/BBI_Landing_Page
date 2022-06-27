import React from 'react';
import classNames from 'classnames';

export default function InvertedButton(props) {
  const { className, children } = props;
  return (
    <a
      className={classNames(
        'inline-block px-4 py-2 mr-2 font-medium leading-5 bg-transparent rounded-md text-coolGray-500 hover:bg-gray-300',
        className
      )}
      href="#"
    >
      {children}
    </a>
  );
}

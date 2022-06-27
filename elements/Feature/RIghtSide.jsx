import React from 'react';
import Article from '../../components/common/Article';
import Button from '../../components/common/Button';
import IntervalImage from '../../components/common/IntervalImage';

export default function RightSide(props) {
  const { content, image } = props;
  return (
    <section className="py-24 overflow-hidden transition-all bg-white md:py-32 bg-image-light dark:bg-image-dark dark:bg-black">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 lg:items-center">
          <div className="w-full px-4 mb-16 md:w-1/2 md:mb-0">
            <div className="relative mx-auto md:ml-0 max-w-max">
              <img
                className="absolute z-10 w-2/12 text-yellow-400 -left-16 -bottom-16"
                src="flex-ui-assets/elements/circle2-yellow.svg"
                alt=""
              />
              <img
                className="absolute z-10 w-2/12 text-blue-500 -rotate-90 -right-16 -top-16"
                src="flex-ui-assets/elements/wave2-yellow.svg"
                alt=""
              />
              <IntervalImage arrImage={image} />
            </div>
          </div>
          <div className="w-full px-10 md:w-1/2">
            <Article content={content} />
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

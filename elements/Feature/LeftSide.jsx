import React from 'react';
import Article from '../../components/common/Article';
import Button from '../../components/common/Button';
import IntervalImage from '../../components/common/IntervalImage';

export default function LeftSide(props) {
  const { content, image } = props;
  return (
    <section className="py-24 overflow-hidden transition-all bg-white md:py-32 dark:bg-black bg-image-light dark:bg-image-dark">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 lg:items-center">
          <div className="w-full px-4 mb-16 md:w-1/2 md:mb-0">
            <Article content={content} />
            <Button> Get Started </Button>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="relative mx-auto md:mr-0 max-w-max">
              <img
                className="absolute z-10 w-4/12 text-yellow-400 opacity-80 -left-28 -top-24"
                src="flex-ui-assets/elements/blob.svg"
                alt=""
              />
              <img
                className="absolute z-10 w-4/12 text-blue-500 -right-7 -bottom-8"
                src="flex-ui-assets/elements/cirlcle-pattern.svg"
                alt=""
              />
              <IntervalImage arrImage={image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

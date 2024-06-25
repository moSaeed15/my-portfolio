import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '../data';

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          (
            {
              id,
              title,
              description,
              className,
              img,
              imgClassName,
              titleClassName,
              spareImg,
              specialText,
            },
            index
          ) => (
            <BentoGridItem
              id={id}
              key={index}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
              specialText={specialText}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;

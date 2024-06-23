import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/bentoGrid';

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {[{ title: 'Title 1', description: 'Description 1', id: 1 }].map(
          (item, index) => (
            <BentoGridItem
              id={item.id}
              key={index}
              title={item.title}
              description={item.description}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;

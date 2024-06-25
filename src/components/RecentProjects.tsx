import { projects } from '@/data';
import React from 'react';
import Card from './Card';

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h2 className="heading">
        A small selection of{' '}
        <span className="text-purple"> recent projects</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-44 gap-y-16 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <Card />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

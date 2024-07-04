import { projects } from '@/data';
import React from 'react';
import Card from './Card';

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h2 className="heading">
        A small selection of{' '}
        <span className="text-purple"> recent projects</span>
      </h2>
      <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center p-2 sm:p-4 lg:gap-x-[12vw] xl:gap-x-60 gap-y-64 sm:gap-y-60 lg:gap-y-32 mt-32 lg:mt-20">
        {projects.map(
          ({ id, title, des, img, iconLists, link, websiteLink, gallery }) => (
            <div
              key={id}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              <Card
                gallery={gallery}
                title={title}
                des={des}
                img={img}
                iconLists={iconLists}
                link={link}
                websiteLink={websiteLink}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RecentProjects;

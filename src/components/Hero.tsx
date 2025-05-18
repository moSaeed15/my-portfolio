import Image from 'next/image';
import MagicButton from './ui/MagicButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { Navigation, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pb-20 pt-24">
      <div className="">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-10 left-full  h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex justify-center relative my-20 z-10 gap-10 flex-col lg:flex-row items-center">
        <div className="w-3/4  max-w-[400px] md:max-w-[600px] lg:max-w-[500px] mb-10">
          <Image
            width={500}
            height={500}
            priority={true}
            src="/Avatar2.webp"
            quality={80}
            alt="Hero Image"
            className=" object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center  w-full">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 ">
            Creating Dynamic Web Experiences
          </p>
          <TextGenerateEffect
            words="Transforming Ideas into High-Performance Web Applications"
            className="text-center text-[40px] sm:text-3xl md:text-5xl "
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Mohammed, a Frontend Engineer based in Egypt.
          </p>
          <div className=" flex gap-10">
            <a href="#about">
              <MagicButton
                title="About me"
                icon={<Navigation />}
                position="right"
              />
            </a>
            {/* <a href="/Mohammed_El Saeed_resume.pdf" target="_blank">
              <MagicButton
                title="My Resume"
                icon={<FileText />}
                position="right"
              />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

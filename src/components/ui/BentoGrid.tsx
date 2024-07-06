/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';

// Also install this npm i --save-dev @types/react-lottie
import Lottie from 'react-lottie';

import { cn } from '@/utils/cn';

import { BackgroundGradientAnimation } from './BackgroundGradientAnimation';
import animationData from '@/data/confetti.json';
import { Copy } from 'lucide-react';
import MagicButton from './MagicButton';
import Image from 'next/image';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
  specialText,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  specialText?: string;
}) => {
  const leftLists = ['ReactJS', 'Next.js', 'Typescript'];
  const rightLists = ['HTML', 'Tailwind', 'CSS'];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleCopy = () => {
    const text = 'mohammed.elsaeed1@gmail.com';
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4',
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: 'rgb(4,7,29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              width={1000}
              height={1000}
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center ')}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-16 ${
            id === 5 && 'w-full opacity-80'
          } `}
        >
          {spareImg && (
            <Image
              width={1000}
              height={1000}
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-40 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        {id === 1 && (
          <div className="">
            <h3
              className={`ml-5 mt-5 font-sans text-lg lg:text-3xl font-bold z-10 max-w-[45ch]`}
            >
              {title} <span className="text-purple">{specialText}</span>
            </h3>
            <h2 className={`ml-5 mt-5 font-sans text-lg  font-bold z-10 `}>
              My name is Mohammed El Saeed, a passionate Frontend Engineer
              committed to creating engaging and efficient user interfaces.
            </h2>
            <p
              className={` ml-5 mt-5 font-sans  lg:text-base text-sm  z-10  max-w-prose text-white-200  font-medium leading-7 md:leading-8`}
            >
              {description}
            </p>
            <p className="ml-5 mt-5 font-sans  lg:text-base text-sm  z-10  max-w-prose text-white-200  font-medium leading-7 md:leading-8">
              Currently, I am open to full-time opportunities where I can
              contribute my skills to dynamic teams and impactful projects. I am
              also available for freelance work, eager to collaborate on
              creative and challenging web projects. If you need a dedicated
              professional to bring your digital vision to life, let&apos;s
              discuss how we can work together. Feel free to explore my
              portfolio to see the projects I&apos;ve been a part of and how I
              can help you achieve your goals.
            </p>
            <p className="ml-5 mt-5 font-sans  lg:text-base text-sm  z-10  max-w-prose text-white  font-medium leading-7 md:leading-8">
              Thanks for stopping by, and I look forward to connecting with you
              soon!
            </p>
          </div>
        )}

        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full  flex flex-col px-5 p-5 lg:p-10 '
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          {id !== 1 && (
            <div
              className={`font-sans  lg:text-base text-sm  z-10 max-w-[20ch]`}
            >
              {description}
            </div>
          )}
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          {id !== 1 && (
            <div
              className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 max-w-[20ch]`}
            >
              {title}
            </div>
          )}

          {/* for the github 3d globe */}
          {/* {id === 2 && <GlobeDemo />} */}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-3 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8 mr-2">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? 'block' : 'block'
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? 'Email is Copied!' : 'Copy my email address'}
                icon={<Copy />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

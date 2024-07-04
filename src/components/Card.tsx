'use client';

import { CardBody, CardContainer, CardItem } from './ui/3DCard';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import GalleryModal from './GalleryModal';

interface Props {
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  websiteLink: string;
  gallery: string[];
}

const Card = ({
  title,
  des,
  img,
  iconLists,
  link,
  websiteLink,
  gallery,
}: Props) => {
  return (
    <CardContainer className="inter-var ">
      <CardBody className="bg-gray-50 max-h-[650px] relative group/card   dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-[rgb(4,7,29)] dark:border-white/[0.2] border-black/[0.1] w-auto md:w-[35rem] lg:w-[30rem] 2xmd:w-[32rem] xl:w-[35rem] sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="px-5 text-xl font-bold text-neutral-600 dark:text-white flex items-center justify-between w-full mb-10"
        >
          <span className="max-w-[17ch] sm:max-w-full">{title}</span>
          <Link href={link} target="__blank">
            <Image
              src="git.svg"
              height="50"
              width="50"
              alt="source code"
              className="w-10 sm:w-12 absolute right-1 -top-1 sm:right-2 sm:-top-2"
            />
          </Link>
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4 relative">
          <Image
            src={img}
            height="1000"
            width="1000"
            quality={100}
            className="min-h-52 md:min-h-72 max-h-60 md:max-h-72 w-full object-top object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500  text-base mt-2 dark:text-neutral-300 ml-2 min-h-20"
        >
          {des}
        </CardItem>
        <CardItem
          as="div"
          translateZ="60"
          className="text-neutral-500 flex  text-base mt-2 dark:text-neutral-300 ml-2"
        >
          {iconLists.map((icon, index) => (
            <div
              key={index}
              className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
              style={{
                transform: `translateX(-${5 * index + 2}px)`,
              }}
            >
              <Image
                width={100}
                height={100}
                src={icon}
                alt="icon5"
                className="p-2"
              />
            </div>
          ))}
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <GalleryModal gallery={gallery} />
          {websiteLink !== '' && (
            <CardItem
              translateZ={20}
              as={Link}
              href={websiteLink}
              target="__blank"
              className=" relative z-40 px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <ExternalLink />
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Card;

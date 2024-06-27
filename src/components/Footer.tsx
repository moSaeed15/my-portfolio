import { FaLocationArrow } from 'react-icons/fa6';

import { socialMedia } from '@/data';
import { Navigation } from 'lucide-react';
import MagicButton from './ui/MagicButton';
import Contact from './Contact';

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10" id="contact">
      <div className="flex justify-center relative my-20 z-10 gap-16 flex-col lg:flex-row items-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="heading lg:max-w-[50vw]">
            Ready to create <span className="text-purple">your </span>
            web experience?
          </h2>
          <p className="text-white-200 md:mt-10 my-5 max-w-[50vw]">
            I&apos;m currently seeking full-time opportunities as a Frontend
            Engineer and am also open to freelance projects. Let&apos;s connect
            and discuss how my skills can help your company grow.
          </p>
        </div>
        <div className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] mb-10">
          <Contact />
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Mohammed El Saeed
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map(info => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

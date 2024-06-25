import { FaLocationArrow } from 'react-icons/fa6';

import { socialMedia } from '@/data';
import { Navigation } from 'lucide-react';
import MagicButton from './ui/MagicButton';

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to enhance/create <span className="text-purple">your</span> web
          experience?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I&apos;m currently seeking full-time opportunities as a Frontend
          Engineer and am also open to freelance projects. Let&apos;s connect
          and discuss how my skills can help your company grow.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Get in Touch."
            icon={<Navigation />}
            position="right"
          />
        </a>
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
import { socialMedia } from '@/data';
import { Navigation } from 'lucide-react';
import MagicButton from './ui/MagicButton';
import Contact from './Contact';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] " id="contact">
      <div className="flex justify-center relative my-20 z-10 gap-16 flex-col lg:flex-row items-center">
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <a href="mailto:mohammed.elsaeed1@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<Navigation />}
              position="right"
            />
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Mohammed El Saeed
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-5 md:mt-0">
          {socialMedia.map(info => (
            <Link key={info.id} href={info.link} target="_blank">
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

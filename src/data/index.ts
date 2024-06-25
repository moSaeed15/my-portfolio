import { spec } from 'node:test/reporters';

export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: `Welcome to My Portfolio Where Ideas Take Shape `,
    description: `When I'm not busy building  a new web app, you'll find me exploring the latest tech trends or fine-tuning my existing skills to stay ahead in the ever-evolving field of frontend development. My journey in tech has been fueled by a love for continuous learning and a drive to innovate. Whether it's mastering a new JavaScript framework or optimizing a user experience and perfomance 
    , I thrive on challenges and the opportunity to make digital interactions seamless and intuitive.`,
    className:
      'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] relative -pb-1',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    // img: '/b1.svg',
    spareImg: '',
    specialText: 'and Code Comes to Life!',
  },
  {
    id: 2,
    title: 'Skilled in Integrating Frontend with Backend APIs',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },
  {
    id: 3,
    title: 'My Tech Stack',
    description:
      'I am passionate about learning and continuously improving my tech stack to grow further',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },

  {
    id: 5,
    title: 'Proactive in Learning New Technologies',
    description: 'Exploring and mastering the latest tools and frameworks.',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Interested in my Work? Let’s Connect!',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Event Booking/Creation Website',
    des: 'A React-based platform for managing events with dynamic filtering and authentication.',
    img: '/p1.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: 'https://github.com/your-profile/event-booking-website',
  },
  {
    id: 2,
    title: 'Game Data Dashboard',
    des: 'A Next.js dashboard for game data with user authentication and data filtering.',
    img: '/p2.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: 'https://github.com/your-profile/game-data-dashboard',
  },
  {
    id: 3,
    title: 'Property Management Website',
    des: 'A React-based site for property management with form handling and booking system.',
    img: '/p3.svg',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    link: 'https://github.com/your-profile/property-management-website',
  },
  {
    id: 4,
    title: 'Animated Apple iPhone 3D Website',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.',
    img: '/p4.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: 'https://github.com/adrianhajdin/iphone',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Frontend Engineer Intern',
    desc: 'Created Production level web application using React.js in an agile environment.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
    companyLogo: '/link-logo.png',
  },
  {
    id: 2,
    title: 'Junior Fullstack Developer',
    desc: 'Developed a cybersecurity report generation website using React and Laravel.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Freelance Frontend Dev Project',
    desc: 'Led the development of a property management website for a client, implementing complex form handling and a booking calendar system.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
  },
  {
    id: 2,
    img: '/twit.svg',
  },
  {
    id: 3,
    img: '/link.svg',
  },
];

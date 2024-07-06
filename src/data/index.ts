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
    img: '/grid.webp',
    spareImg: '/b4.webp',
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
    img: '/b5.webp',
    spareImg: '/grid.webp',
  },
  {
    id: 6,
    title: 'Interested in my Work? Let’s Connect!',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Game Data Dashboard',
    des: 'A Next.js dashboard for game data with user authentication and data filtering.',
    img: '/cogniverse/maze.webp',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/firebase.svg'],
    link: 'https://github.com/moSaeed15/cogniverse',
    websiteLink: 'https://cogniverse-rho.vercel.app/',
    gallery: [
      '/cogniverse/focus.webp',
      '/cogniverse/maze.webp',
      '/cogniverse/login.webp',
    ],
  },
  {
    id: 2,
    title: 'Audiophile E-commerce Website',
    des: 'Multi-page site using HTML, Sass, and vanilla JS from a Figma design. Includes landing, product, and checkout pages with modals and cart functionality.',
    img: '/audio/home.webp',
    iconLists: ['/html.svg', '/css.svg', '/js.svg', '/sass.svg'],
    link: 'https://github.com/mosaeed15/audiophile',
    websiteLink: 'https://mosaeed15.github.io/audiophile/',
    gallery: [
      '/audio/home.webp',
      '/audio/product.webp',
      '/audio/checkout.webp',
      '/audio/cart.webp',
      '/audio/checkout-modal.webp',
    ],
  },
  {
    id: 3,
    title: 'Property Management Website',
    des: 'A React-based site for property management with form handling and booking system.',
    img: '/picnic/main.webp',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/chakra.svg'],
    link: 'https://github.com/moSaeed15/Picnic-Webapp',
    websiteLink: '',
    gallery: [
      '/picnic/admin-ar.webp',
      '/picnic/admin.webp',
      '/picnic/base.webp',
      '/picnic/main.webp',
    ],
  },

  {
    id: 4,
    title: 'Event Booking/Creation Website',
    des: 'A React-based platform for managing events with dynamic filtering and authentication.',
    img: '/event/landing.webp',

    iconLists: ['/re.svg', '/styled.svg'],
    link: 'https://github.com/moSaeed15/tessera-frontend',
    websiteLink: '',
    gallery: [
      '/event/event-login.webp',
      '/event/modal.webp',
      '/event/landing.webp',
    ],
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Junior Fullstack Developer',
    desc: 'Built a cybersecurity report generation site with React and Laravel. Created 5+ interactive pages with forms and table views. Developed CRUD backend endpoints and used GitHub for version control.',
    className: 'md:col-span-2',
    thumbnail: '/zinad.svg',
  },
  {
    id: 2,
    title: 'Frontend Engineer Intern',
    desc: 'Developed a production-level web app using React.js in an agile setting.',
    className: 'md:col-span-2',
    thumbnail: '/link-logo.svg',
    companyLogo: '/',
  },
  {
    id: 3,
    title: 'Freelance Frontend Dev Project',
    desc: 'Led the creation of a property management site with React. Implemented form handling, booking calendar, admin dashboard, multilingual support, and role-based authentication.',
    className: 'md:col-span-2',
    thumbnail: '/picnic-logo.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    //link to social
    link: 'https://github.com/moSaeed15',
  },
  {
    id: 2,
    img: '/twit.svg',
    link: 'https://x.com/Mohsaeed_',
  },
  {
    id: 3,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/mohammed-el-saeed/',
  },
];

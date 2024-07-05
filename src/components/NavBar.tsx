const NavBar = () => {
  return (
    <div className="flex relative top-0 sm:mx-auto  px-0 sm:px-5 bg-transparent  justify-between py-5 items-center z-40">
      <h1 className=" text-sm  sm:text-xl font-bold uppercase ">
        Mohammed El Saeed
      </h1>
      <ul className="flex justify-between items-center gap-1 sm:gap-3 sm:text-base text-xs ">
        <li className="hover:opacity-50 duration-150 transition-opacity">
          <a href="#projects"> My Projects </a>
        </li>
        <li className="hover:opacity-50 duration-150 transition-opacity">
          <a href="#experience">My Experience </a>
        </li>
        {/* <a href="#hire">
          <li className="hover:opacity-50 duration-150 transition-opacity">
            Why hire me?
          </li>
        </a> */}
      </ul>
      <a href="#contact" className="hidden md:block">
        <button className="px-3 py-3 bg-violet-500 rounded-lg">
          Contact Me
        </button>
      </a>
    </div>
  );
};

export default NavBar;

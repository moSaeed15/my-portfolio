import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="flex relative top-0 mx-auto sm:px-10 px-5 bg-transparent  justify-between py-5 items-center z-50">
      <h1 className="text-xl font-bold uppercase">Mohammed El Saeed</h1>
      <ul className="flex justify-between items-center gap-3 ">
        <a href="#projects">
          <li className="hover:opacity-50 duration-150 transition-opacity">
            My Projects
          </li>
        </a>
        <a href="#experience">
          <li className="hover:opacity-50 duration-150 transition-opacity">
            My Experience
          </li>
        </a>
        <a href="#hire">
          <li className="hover:opacity-50 duration-150 transition-opacity">
            Why hire me?
          </li>
        </a>
      </ul>
      <a href="#contact">
        <button className="px-3 py-3 bg-violet-500 rounded-lg">
          Contact Me
        </button>
      </a>
    </div>
  );
};

export default NavBar;

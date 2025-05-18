// import Experience from '@/components/Experience';
// import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import RecentProjects from '@/components/RecentProjects';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: false,
});
const Experience = dynamic(() => import('@/components/Experience'), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="  lg:max-w-[75rem] w-full">
        <NavBar />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}

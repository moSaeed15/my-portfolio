import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import RecentProjects from '@/components/RecentProjects';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[{ name: 'Home', link: '/' }]} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}

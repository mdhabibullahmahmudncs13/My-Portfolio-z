import Hero from '@/components/sections/Hero';
import Quote from '@/components/sections/Quote';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import About from '@/components/sections/About';
import Contacts from '@/components/sections/Contacts';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Quote />
      <Projects />
      <Skills />
      <About />
      <Contacts />
    </>
  );
}
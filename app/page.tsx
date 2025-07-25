import Chat from '@/components/features/home/chat';
import Expertise from '@/components/features/home/expertise';
import Hero from '@/components/features/home/hero';
import Technologies from '@/components/features/home/technologies';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mt-4 space-y-12 mb-16">
        <Expertise />
        <Technologies/>
        <Chat />
      </div>
    </>
  );
}

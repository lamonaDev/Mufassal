"use client";
import Hero from '@/components/hero';
import AnotherChartToTest from './_components/another-chart';
import dynamic from 'next/dynamic';
import Footer from '@/components/footer';
//! dynamic to prevent the ssr render to the api calls that contain WINDOW object that is not defiend in REACT
const OtherChart = dynamic(() => import("./_components/line-chart"), { ssr: false });
export default function HomePage() {
  return (
    <main className='flex flex-row overflow-hidden h-screen'>
      <div className='flex-1 overflow-auto'>
        <Hero />
        <div className='flex items-center justify-center'>
          <OtherChart />
        </div>
      <Footer/>
      </div>
    </main>
  );
}
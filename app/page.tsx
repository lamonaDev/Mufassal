"use client";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// dynamic(() => import("./_components/firstDashboard"), { ssr: false });
// const FirstDashboard = dynamic(
//   () => import("./_components/firstDashboard"),
//   { ssr: false }
// );
// export default function Home() {
//   return (
//     <>
//     <FirstDashboard />
//       <a href="/FIISaudi.xlsx" download="FIISaudi.xlsx">
//         <button className="p-5 bg-amber-900 rounded-2xl text-2xl text-center cursor-pointer">Download File</button>
//       </a>
//     </>
//   );
// }
import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import  ChartBarInteractive  from './_components/bar-chart';
const FirstDashboard = dynamic(() => import('./_components/firstDashboard').then((mod) => mod.default), {
  ssr: false,  // Disables server-side rendering for this component
});
export default function Page() {
  return (
    <div>
      <h1 className='bg-amber-400 text-2xl text-center'>Firts DashBoard</h1>
      <FirstDashboard />
      <Button className='m-10'>sadasdasd</Button>
      <ChartBarInteractive />
    </div>
  );
}
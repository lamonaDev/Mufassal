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
import {Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage} from '@/components/ui/breadcrumb';
import { chatResponse } from '@/mistral';
const FirstDashboard = dynamic(() => import('./_components/firstDashboard').then((mod) => mod.default), {
  ssr: false,  // Disables server-side rendering for this component
});
const FiveBreadcrumbs = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className='text-white'>Home</BreadcrumbLink>
        </BreadcrumbItem>
            <BreadcrumbSeparator className='text-white' />
        <BreadcrumbItem>
          <BreadcrumbLink className='text-white' href="/products">Products</BreadcrumbLink>
        </BreadcrumbItem>
            <BreadcrumbSeparator className='text-white' />
        <BreadcrumbItem>
          <BreadcrumbLink className='text-white' href="/products/electronics">Electronics</BreadcrumbLink>
        </BreadcrumbItem>
            <BreadcrumbSeparator className='text-white' />
        <BreadcrumbItem>
          <BreadcrumbLink className='text-white' href="/products/electronics/laptops">Laptops</BreadcrumbLink>
        </BreadcrumbItem>
            <BreadcrumbSeparator className='text-white' />
        <BreadcrumbItem>
          <BreadcrumbPage>Dell XPS 15</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default function Page() {
  return (
    <main className='flex flex-row overflow-hidden h-screen'>
      <div className='flex-1 overflow-auto'>
        <FirstDashboard />
        <div className='w-full flex justify-center items-center'>
          <FiveBreadcrumbs />
        </div>
        <ChartBarInteractive />
      </div>
    </main>
  );
}
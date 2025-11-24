"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
dynamic(() => import("./_components/firstDashboard"), { ssr: false });
const FirstDashboard = dynamic(
  () => import("./_components/firstDashboard"),
  { ssr: false }
);
export default function Home() {
  return (
    <>
    <FirstDashboard />
      <a href="/FIISaudi.xlsx" download="FIISaudi.xlsx">
        <button className="p-5 bg-amber-900 rounded-2xl text-2xl text-center cursor-pointer">Download File</button>
      </a>
    </>
  );
}
"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
// dynamic(() => import("./_components/firstDashboard"), { ssr: false });
const FirstDashboard = dynamic(
  () => import("./_components/firstDashboard"),
  { ssr: false }
);
export default function Home() {
  return (
    <>
      <FirstDashboard />
    </>
  );
}

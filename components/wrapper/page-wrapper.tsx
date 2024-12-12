"use client";

import Footer from "./footer";
export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex min-w-screen min-h-screen flex-col items-center dark:bg-roseGold/20 bg-white justify-between overflow-hidden">
        <div className="absolute z-[-99] pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {children}
      </main>
      <Footer />
    </>
  );
}

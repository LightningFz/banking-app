import Sidebar from "@/components/ui/Sidebar";
import Image from 'next/image'
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import MobileNavBar from "@/components/ui/MobileNavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Fawaz', lastName: 'Kat'};

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user= {loggedIn} />

        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src='/icons/logo.svg' width={30} height={30} alt='menu icon'/>   
          <div>
            <MobileNavBar user={loggedIn}/>
          </div>
          </div>
          {children}
        </div>
    </main>
  );
}

import Sidebar from "@/components/ui/Sidebar";
import Image from 'next/image'
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import MobileNavBar from "@/components/ui/MobileNavBar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();

  if(!loggedIn) redirect('/sign-in')

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

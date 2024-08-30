import Sidebar from "@/components/ui/Sidebar";
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Fawaz', lastName: 'Kat'};

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user= {loggedIn} />
        {children}
    </main>
  );
}

import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Kenny", lastName: "Kay" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col"></div>
      {children}
    </main>
  );
}

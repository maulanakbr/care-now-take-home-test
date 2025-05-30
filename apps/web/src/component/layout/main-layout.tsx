interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md p-4 cursor-pointer">
        <h1 className="text-xl font-semibold">Care Now Take Home Test</h1>
      </header>
      <main className="flex-1 py-32 px-60">{children}</main>
      <footer className="bg-gray-100 p-4 text-center text-sm">
        <p className="text-neutral-400">Made by Maulana Akbar Yudistika</p>
        <p className="font-semibold">© {new Date().getFullYear()} Care Now. All rights reserved.</p>
      </footer>
    </div>
  );
}

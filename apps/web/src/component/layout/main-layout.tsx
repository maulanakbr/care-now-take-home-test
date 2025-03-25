import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md p-4">
        <h1 className="text-xl font-semibold">Care Now</h1>
      </header>
      <main className="flex-1 py-6 px-32">{children}</main>
      <footer className="bg-gray-100 p-4 text-center text-sm">
        © {new Date().getFullYear()} Care Now. All rights reserved.
      </footer>
    </div>
  );
}

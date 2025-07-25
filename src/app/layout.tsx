import Footer from '@/components/layout/footer/footer';
import Header from '@/components/layout/header/header';
import Preloader from '@/components/preloader/preloader';
import '@/styles/index.scss';
import type { Metadata } from "next";

// $======================== RootLayout ========================$ //

export const metadata: Metadata = {
  title: "Alex Kis Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <div className='wrapper'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

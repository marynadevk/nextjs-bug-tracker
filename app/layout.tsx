import '@radix-ui/themes/styles.css';
import './globals.css';
import { Theme } from '@radix-ui/themes';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from './NavBar/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Issue Tracker',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <NavBar />
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}

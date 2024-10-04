import '@radix-ui/themes/styles.css';
import './theme-config.css';
import './globals.css';
import { Container, Theme } from '@radix-ui/themes';
import type { Metadata } from 'next';
import { Overpass } from 'next/font/google';
import NavBar from './NavBar/NavBar';
import AuthProvider from './auth/Provider';
import QueryClientProvider from './QueryClientProvider';

const inter = Overpass({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BugTracker',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider>
          <AuthProvider>
            <Theme accentColor="violet">
              <NavBar />
              <main className="p-5">
                <Container>{children}</Container>
              </main>
            </Theme>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

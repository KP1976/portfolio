'use client';

import '@styles/globals.css';
import { Toaster } from 'sonner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head />
      <body>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}

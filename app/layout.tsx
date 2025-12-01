import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'S-26 Gold Mom-to-Be Registration',
  description: 'Nestlé S-26 Gold pregnancy registration form'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

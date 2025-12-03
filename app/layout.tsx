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
      <head>
        {/* Font Awesome for the Facebook mock icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

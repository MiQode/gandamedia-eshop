import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Ganda Media Agency Shop',
  description: 'The best collection from Ganda Media Agency',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

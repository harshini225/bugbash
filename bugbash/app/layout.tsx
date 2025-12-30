import "./globals.css";

import localFont from 'next/font/local';
 
const ByteBounce = localFont({
  src: './assets/ByteBounce.ttf',
})
 
export const metadata = {
  title: "Bug bash for Jack",
  description: "Add bugs and learn about debugging",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

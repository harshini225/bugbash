import "./globals.css";

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

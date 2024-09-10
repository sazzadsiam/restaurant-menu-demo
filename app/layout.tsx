import type { Metadata } from "next";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Restaurant menu",
  description: "rice & noodles restaurant web app for displaying food menu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <video
          autoPlay
          muted
          loop
          className="w-full max-h-screen h-full object-cover fixed -z-10 top-0 left-0"
        >
          <source src="/videos/newVid.mp4" type="video/mp4" />
          Your browser does not support the video tag
        </video>
        {children}
      </body>
    </html>
  );
}

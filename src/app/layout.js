import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./StoreProvider";
import Header from "./components/Header";
import LoadingClient from "./components/LoadingClient"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ChoisisTonPro",
  description: "ChoisisTonPro",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingClient />
        <Header />
      <div className='p-5'>
        {children}
        </div>
      </body>
    </html>
    </StoreProvider>
  );
}

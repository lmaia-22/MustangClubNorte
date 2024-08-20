import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import FullScreenImage from "@/components/firstRender";
import Footer from "@/components/footer";
import FullscreenVideo from "@/components/video";
import CarScroller from "@/components/car";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans",
          fontSans.variable
        )}
      >
        <FullScreenImage imageUrl={DATA.firstRenderUrl} />
        <FullscreenVideo
        videoSrc="/mustang.mp4"
      />
          {/* <div className="relative h-[200vh]">
            <div id="line" className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-400 h-full"></div>
              <CarScroller lineId="line" carImageSrc="/logo_no_bk.png" />
            </div> */}
        <div className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-5xl mx-auto py-6 sm:py-18 px-6",
          fontSans.variable
        )}
        >
          <ThemeProvider attribute="class" defaultTheme="light">
            <TooltipProvider delayDuration={0}>
              {children}
              <Navbar />
            </TooltipProvider>
            <Footer/>
        </ThemeProvider>
        </div>
      </body>
    </html>
  );
}

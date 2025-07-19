import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Lora } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/wrapper/navbar";
import config from "@/config";
import { UserProvider } from "@/lib/auth";
import { cn } from "@/lib/utils";
import CookieBanner from "@/components/footer/cookie-banner";
import { getUser } from "./(auth)/actions";

const LoraFont = Lora({ subsets: ["latin"], weight: ["500", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(config.baseUrl),
  title: {
    default: config.websiteName,
    template: `%s | ${config.websiteName}`,
  },
  description: config.websiteDescription,
  keywords: ["nail art", "estetica unghie", "ricostruzione unghie", "manicure", "pedicure", "trucco semipermanente", "corso onicotecnica", "benessere unghie", "cura delle mani"],
  authors: [{ name: config.websiteName }],
  creator: config.websiteName,
  publisher: config.websiteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  openGraph: {
    title: config.websiteName,
    description: config.websiteDescription,
    url: config.baseUrl,
    siteName: config.websiteName,
    images: [
      {
        url: `${config.baseUrl}/images/social-share.jpg`,
        width: 1200,
        height: 630,
        alt: config.websiteName,
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: config.websiteName,
    description: config.websiteDescription,
    images: [
      {
        url: `${config.baseUrl}/images/twitter-share.jpg`,
        width: 1200,
        height: 600,
        alt: config.websiteName,
      },
    ],
    creator: '@miriampezzotta',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: config.websiteFavicon,
    shortcut: config.websiteFavicon,
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let userPromise = getUser();

  return (
    <html lang="it" suppressHydrationWarning>
      <link rel="icon" type="image/x-icon" href={config.websiteFavicon} />
      <body className={cn(LoraFont.className, "relative")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <UserProvider userPromise={userPromise}>
            <NavBar userPromise={userPromise} />
            <BlurEffect />
            {children}
            <Toaster />
            <CookieBanner />
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

function BlurEffect() {
  return (
    <>
      <svg height="0" width="0">
        <filter
          id="blur-and-scale"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="15"
            result="blurred"
          />
          <feColorMatrix type="saturate" values="4" in="blurred" />
          <feComposite in="SourceGraphic" operator="over" />
        </filter>
      </svg>
      <svg height="0" width="0">
        <filter
          id="blur-and-scale-more"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="40"
            result="blurred"
          />
          <feColorMatrix type="saturate" values="4" in="blurred" />
          <feComposite in="SourceGraphic" operator="over" />
        </filter>
      </svg>
    </>
  );
}

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Lora } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/wrapper/navbar";
import config from "@/config";
import { UserProvider } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { getUser } from "@/lib/db/queries";

const LoraFont = Lora({ subsets: ["latin"], weight: ["500", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(config.baseUrl),
  title: {
    default: config.websiteName,
    template: `%s | ${config.websiteName}`,
  },
  description:
    "The Ultimate Nextjs 14 Starter Kit for quickly building your SaaS, giving you time to focus on what really matters",
  openGraph: {
    description:
      "The Ultimate Nextjs 14 Starter Kit for quickly building your SaaS, giving you time to focus on what really matters",
    images: [""],
    url: config.baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: config.websiteName,
    description: config.websiteDescription,
    images: [""],
  },
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
            <NavBar />
            <BlurEffect />
            {children}
            <Toaster />
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
            stdDeviation="5"
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

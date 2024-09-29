import Provider from "@/app/provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import AuthWrapper from "@/components/wrapper/auth-wrapper";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/wrapper/navbar";
import config from "@/config";

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
  return (
    <AuthWrapper>
      <html lang="it" suppressHydrationWarning>
        <body className={GeistSans.className}>
          <Provider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <NavBar />
              {children}
              <Toaster />
            </ThemeProvider>
          </Provider>
          <Analytics />
        </body>
      </html>
    </AuthWrapper>
  );
}

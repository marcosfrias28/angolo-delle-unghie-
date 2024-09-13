import { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import config from "@/config";
import { itIT } from "@clerk/localizations";

interface AuthWrapperProps {
  children: ReactNode;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  if (!config.auth.enabled) {
    return <>{children}</>;
  }

  return (
    <ClerkProvider
      localization={itIT}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      {children}
    </ClerkProvider>
  );
};

export default AuthWrapper;

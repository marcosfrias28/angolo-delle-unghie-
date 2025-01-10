"use client";

import { signOut } from "@/app/(auth)/actions";
import { ActionState } from "@/lib/auth/middleware";
import { User } from "@/lib/db/schema";
import { Label } from "@radix-ui/react-label";
import { LucideLogOut } from "lucide-react";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

const LogOutButton = ({ user }: { user: User | null }) => {
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    signOut,
    { error: "" }
  );

  useEffect(() => {
    isPending && toast("Logout effettuato con successo...");
  }, [isPending]);

  if (!user) {
    return null;
  }

  return (
    <form
      className="flex items-center justify-center gap-2"
      action={formAction}
    >
      <Label className="text-nowrap">Benvenut@, {user.name}</Label>
      <button type="submit" disabled={isPending}>
        <LucideLogOut width={20} height={20} />
      </button>
    </form>
  );
};

export default LogOutButton;

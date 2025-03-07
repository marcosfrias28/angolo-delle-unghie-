"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { signIn, signUp } from "./actions";
import { ActionState } from "@/lib/auth/middleware";
import Image from "next/image";
import config from "@/config";

export function Login({ mode = "signin" }: { mode?: "signin" | "signup" }) {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    mode === "signin" ? signIn : signUp,
    { error: "" }
  );

  return (
    <div className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Image
            src={"/logo-lightmode.svg"}
            priority
            alt="Logo angolo delle unghie"
            width={300}
            height={300}
            className="text-roseGold-light dark:text-rose"
          />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-700">
          {mode === "signin" ? "Accedi al tuo account" : "Crea il tuo account"}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="space-y-6" action={formAction}>
          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 ml-1"
            >
              Email
            </Label>
            <div className="mt-1">
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={50}
                className="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-roseGold-light focus:border-roseGold-light focus:z-10 sm:text-sm"
                placeholder="mariorossi@example.it"
              />
            </div>
          </div>

          <div>
            <Label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 ml-1"
            >
              Password
            </Label>
            <div className="mt-1">
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete={
                  mode === "signin" ? "current-password" : "new-password"
                }
                required
                minLength={8}
                maxLength={100}
                className="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-roseGold-light focus:border-roseGold-light focus:z-10 sm:text-sm"
                placeholder="********"
              />
            </div>
          </div>

          {mode === "signup" && (
            <>
              <div>
                <Label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 ml-1"
                >
                  Conferma Password
                </Label>
                <div className="mt-1">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    minLength={8}
                    maxLength={100}
                    className="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-roseGold-light focus:border-roseGold-light focus:z-10 sm:text-sm"
                    placeholder="********"
                  />
                </div>
              </div>
              <div>
                <Label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 ml-1"
                >
                  Inserisci il tuo nome
                </Label>
                <div className="mt-1">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    minLength={3}
                    maxLength={100}
                    className="appearance-none rounded-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-roseGold-light focus:border-roseGold-light focus:z-10 sm:text-sm"
                    placeholder="Mario Rossi"
                  />
                </div>
              </div>
            </>
          )}

          {state?.error && (
            <div className="text-red-500 text-sm">{state.error}</div>
          )}

          <div>
            <Button
              type="submit"
              className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-black bg-roseGold-light dark:bg-rose dark:text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roseGold-light"
              disabled={pending}
            >
              {pending ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                  Caricamento in corso...
                </>
              ) : mode === "signin" ? (
                "Accedi"
              ) : (
                "Registrati"
              )}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">
                {mode === "signin"
                  ? `Nuov@ su ${config.websiteName}`
                  : "Hai già un account?"}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href={`${mode === "signin" ? "/register" : "/login"}`}
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-sm shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roseGold-light"
            >
              {mode === "signin"
                ? "Crea un account"
                : "Accedi a un account esistente"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

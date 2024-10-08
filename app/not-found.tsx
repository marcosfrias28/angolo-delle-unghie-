import Link from "next/link";
import { TriangleIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[100dvh]">
      <div className="max-w-md space-y-8 p-4 text-center">
        <div className="flex justify-center">
          <TriangleIcon className="size-12 text-roseGold-light  " />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-base text-gray-500">
          La pagina che stai cercando potrebbe essere stata{" "}
          <span className=" underline underline-offset-0 font-semibold">
            rimossa
          </span>
          , il suo nome potrebbe essere stato cambiato, o potrebbe essere
          temporaneamente non disponibile.
        </p>
        <Link
          href="/"
          className="max-w-48 mx-auto flex justify-center py-2 px-4 border border-gray-300 transition-all duration-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-roseGold-light"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

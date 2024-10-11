import Link from "next/link";
import { TriangleIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="grid place-content-center min-h-screen">
      <div className="self-center border-[6px] border-b-white dark:border-b-black border-roseGold-light size-20 rounded-[50px] animate-spin" />
    </div>
  );
}

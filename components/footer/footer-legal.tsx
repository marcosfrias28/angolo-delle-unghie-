import Link from "next/link";

function FooterLegal() {
  return (
    <div className="flex flex-row flex-nowrap gap-5 items-center justify-center text-xs pt-8 max-lg:mt-10 mb-2 lg:absolute bottom-0 w-full">
      <Link
        href="/termini-e-condizioni"
        className="transition hover:opacity-75"
      >
        Termini e Condizioni
      </Link>
      <Link href="/privacy" className="transition hover:opacity-75">
        Informativa sulla Privacy
      </Link>
      <span className="pointer-events-none text-white">
        &copy; 2024. L'Angolo Delle Unghie.
      </span>
    </div>
  );
}

export default FooterLegal;

function FooterLegal() {
  const legalLinks = [
    { href: "/termini-e-condizioni", label: "Termini e Condizioni" },
    { href: "/privacy", label: "Informativa sulla Privacy" },
  ];

  return (
    <div className="border-t py-8 max-lg:mt-10 justify-self-end lg:absolute bottom-0 w-full">
      <ul className="mb-8 flex flex-wrap gap-4 text-xs">
        {legalLinks.map(({ href, label }) => (
          <li key={label}>
            <a href={href} className="transition hover:opacity-75">
              {label}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-xs text-white">&copy; 2024. L'Angolo Delle Unghie.</p>
    </div>
  );
}

export default FooterLegal;

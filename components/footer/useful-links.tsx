function UsefulLinks() {
  const links = [
    { href: "/servizi", label: "I Nostri Servizi" },
    { href: "/prenota", label: "Prenota un Appuntamento" },
    { href: "/galleria", label: "Galleria Lavori" },
  ];

  return (
    <div>
      <p className="font-medium">Link Utili</p>
      <ul className="mt-6 space-y-4 text-sm">
        {links.map(({ href, label }) => (
          <li key={label}>
            <a href={href} className="transition hover:opacity-75">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsefulLinks;

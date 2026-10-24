/**
 * Navigation anchor item specification.
 */
export interface NavItem {
  readonly label: string;
  readonly href: string;
}

const NAV_ITEMS: readonly NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
];

/**
 * Main application navigation bar with smooth hover indicators.
 */
export const Navbar = () => {
  return (
    <nav className="flex justify-center" aria-label="Main navigation">
      <ul className="mt-8 flex">
        {NAV_ITEMS.map((item) => (
          <li key={item.href} className="p-5">
            <a className="group flex items-center py-3" href={item.href}>
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-700 transition-all group-hover:w-16 group-hover:bg-violet-200 group-focus-visible:w-16 group-focus-visible:bg-violet-200 motion-reduce:transition-none" />
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

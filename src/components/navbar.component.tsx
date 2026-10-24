export const Navbar = () => {
  return (
    <nav className="flex justify-center" aria-label="">
      <ul className="mt-8 flex">
        <li className="p-5">
          <a className="group flex items-center py-3 active" href="#about">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-700 transition-all group-hover:w-16 group-hover:bg-violet-200 group-focus-visible:w-16 group-focus-visible:bg-violet-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              About
            </span>
          </a>
        </li>

        <li className="p-5">
          <a className="group flex items-center py-3" href="#experience">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-700 transition-all group-hover:w-16 group-hover:bg-violet-200 group-focus-visible:w-16 group-focus-visible:bg-violet-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Experience
            </span>
          </a>
        </li>

        <li className="p-5">
          <a className="group flex items-center py-3" href="#certifications">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-700 transition-all group-hover:w-16 group-hover:bg-violet-200 group-focus-visible:w-16 group-focus-visible:bg-violet-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Certifications
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

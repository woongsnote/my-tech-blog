import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "./ThemeSwitch";

const links = [
  { label: "blog", href: "/blog" },
  { label: "projects", href: "/projects" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full fixed z-20 shadow-sm top-0 left-0 bg-white dark:bg-black">
      <header className="border-b ">
        <div className="flex justify-between  items-center max-w-screen-md  mx-auto py-1 px-4 md:px-0">
          <Link href="/">
            <h1 className="text-xl font-bold text-center">Woongsnote</h1>
          </Link>
          <nav className="flex items-center">
            <ul className="hidden sm:flex gap-4">
              {links.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className={`text-md w-12 ${
                    pathname === href
                      ? "text-indigo-500 dark:text-indigo-400 font-bold"
                      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </ul>
            <ThemeSwitch />
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;

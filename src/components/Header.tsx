import { FinnTheHuman } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Header() {
  return (
    <header className="motion-preset-slide-down-lg flex items-center justify-between gap-4 p-3 motion-ease-spring-snappy">
      <Link
        href={"/"}
        className="flex items-center gap-0.5 md:hover:motion-preset-shake md:motion-ease-spring-snappy"
      >
        <FinnTheHuman className="size-6" />
        <span
          className="font-bold uppercase aria-hidden:hidden md:aria-hidden:inline-flex"
          aria-hidden="true"
        >
          home
        </span>
      </Link>
    </header>
  );
}

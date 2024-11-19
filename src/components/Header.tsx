import { FinnTheHuman } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg flex items-center justify-between gap-4 p-3">
      <Link
        href={"/"}
        className="md:hover:motion-preset-shake md:motion-ease-spring-snappy flex items-center gap-0.5"
      >
        <FinnTheHuman className="size-6" />
        <span
          className="font-bold uppercase leading-normal aria-hidden:hidden md:aria-hidden:inline-flex"
          aria-hidden="true"
        >
          home
        </span>
      </Link>
      <div className=""></div>
    </header>
  );
}

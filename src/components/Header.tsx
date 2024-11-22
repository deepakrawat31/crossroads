"use client";

import { ArrowUpRight, FinnTheHuman } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();

  const isGamePage = (path: string) => pathName === path;

  return (
    <header className="motion-preset-slide-down-lg sticky top-0 z-50 flex items-center justify-between gap-4 bg-neutral-300 p-3 ring-1 ring-neutral-600/30 motion-ease-spring-snappy">
      <Link
        href={"/"}
        className="flex items-center gap-1 md:hover:motion-preset-shake md:motion-ease-spring-snappy"
      >
        <FinnTheHuman className="size-6" weight="light" />
        <span
          className="text-sm uppercase aria-hidden:hidden md:aria-hidden:inline-flex"
          aria-hidden="true"
        >
          home
        </span>
      </Link>
      {!isGamePage("/game") && (
        <Link
          href={"/game"}
          className="group flex items-center gap-1 text-sm uppercase"
        >
          <span className="text-sm uppercase">play</span>
          <ArrowUpRight
            className="size-6 md:transition-transform md:duration-500 md:group-hover:rotate-45"
            weight="thin"
          />
        </Link>
      )}
    </header>
  );
}

"use client";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

export default function Footer() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>(
    {
      root: null, // Observe the viewport
      rootMargin: "0px",
      threshold: 0.6, // Trigger when 50% of the element is visible
    },
    true, // Trigger once
  );

  const tools = [
    {
      id: 1,
      tool: "next.js",
      link: "https://nextjs.org",
      text: "A React framework that simplifies building modern web applications with features like - Server-Side Rendering (SSR),Static Site Generation (SSG),API Routes,Dynamic Routing.",
    },
    {
      id: 2,
      tool: "tailwind css",
      link: "https://tailwindcss.com",
      text: "A utility-first CSS framework that provides pre-built classes for quickly styling websites and applications.",
    },
  ];

  return (
    <footer
      className="flex flex-col justify-between gap-4 overflow-hidden bg-neutral-900 p-2 text-neutral-300 md:flex-row md:p-4"
      ref={ref}
    >
      <h3
        className={`pl-4 font-testimonia text-6xl ${isVisible ? "motion-preset-slide-up-md visible motion-delay-200 motion-ease-spring-snappy" : "invisible"}`}
      >
        built with:
      </h3>
      <div
        className={`flex flex-col gap-4 ${isVisible ? "motion-preset-slide-up-md visible motion-delay-500 motion-ease-spring-snappy" : "invisible"}`}
      >
        {tools.map((tool) => (
          <span className="group flex gap-4" key={tool.id}>
            <small>{tool.id}</small>
            <Link
              href={tool.link}
              target="_blank"
              className="flex max-w-xl flex-col gap-2 uppercase leading-relaxed text-neutral-300 duration-300 md:text-neutral-600 md:transition-colors md:group-hover:text-neutral-300"
            >
              <span className="flex items-center justify-between gap-2">
                <small>{tool.tool}</small>
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
              </span>
              <span className="text-sm">{tool.text}</span>
            </Link>
          </span>
        ))}
        <span className="group flex gap-4">
          <small>{tools.length + 1}</small>
          <Link
            href={"https://github.com/deepakrawat31/crossroads"}
            target="_blank"
            className="flex w-full max-w-xl items-center justify-between gap-2 uppercase leading-relaxed text-neutral-300 duration-300 md:text-neutral-600 md:transition-colors md:group-hover:text-neutral-300"
          >
            <small>link to github repo</small>
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
          </Link>
        </span>
      </div>
    </footer>
  );
}

"use client";

import { ArrowRight, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import Link from "next/link";

const scrollToSection = () => {
  const section = document.getElementById("target-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" }); //Scrolls to next section
  }
};

export default function MainSection() {
  return (
    <main className="flex h-[calc(100dvh-48px)] flex-col items-center justify-center overflow-hidden p-2 md:flex-row">
      <div className="flex flex-1 items-center justify-center">
        <span className="flex max-w-lg flex-col items-start justify-center gap-8">
          <h1 className="motion-preset-slide-up-md font-testimonia text-6xl font-normal motion-delay-200 motion-ease-spring-snappy md:text-9xl">
            Crossroads
          </h1>
          <p className="motion-preset-slide-up-md text-justify leading-normal text-neutral-600 motion-delay-500 motion-ease-spring-snappy">
            Crossroads is an immersive choice-based adventure game powered by
            AI, where every decision you make shapes your journey and determin
            your ultimate fate.
          </p>
          <button
            className="group motion-preset-slide-up-md flex items-center gap-2 self-end rounded-full bg-neutral-900 px-4 py-2 uppercase text-neutral-300 motion-delay-700 motion-ease-spring-snappy"
            onClick={scrollToSection}
          >
            <span>how it works</span>
            <ArrowRight
              className="size-6 rotate-90 md:rotate-0 md:transition-transform md:duration-500 md:group-hover:rotate-90"
              weight="light"
            />
          </button>
        </span>
      </div>
      <div className="motion-preset-slide-left-md flex items-end gap-4 rounded-full px-4 py-2 ring-1 ring-neutral-600 motion-delay-700 motion-ease-spring-snappy md:flex-col md:px-2 md:py-4 md:text-neutral-600 md:ring-neutral-600/40 md:transition-all md:duration-300 md:hover:text-neutral-900 md:hover:ring-neutral-600">
        <Link href={"https://github.com/deepakrawat31"} target="_blank">
          <GithubLogo
            className="size-6 motion-duration-500 motion-ease-spring-snappy md:hover:motion-preset-shake"
            weight="light"
          />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/deepak-rawat-987968238/"}
          target="_blank"
        >
          <LinkedinLogo
            className="size-6 motion-duration-500 motion-ease-spring-snappy md:hover:motion-preset-shake"
            weight="light"
          />
        </Link>
        {/* <Link href={"/"}>
          <At
            className="size-6 motion-duration-500 motion-ease-spring-snappy md:hover:motion-preset-shake"
            weight="light"
          />
        </Link> */}
      </div>
    </main>
  );
}

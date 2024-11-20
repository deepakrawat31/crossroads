import {
  ArrowRight,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function MainSection() {
  return (
    <main className="flex h-[calc(100dvh-48px)] flex-col items-center justify-center overflow-hidden p-2 md:flex-row">
      <div className="flex flex-1 items-center justify-center">
        <span className="flex max-w-lg flex-col items-start justify-center gap-8">
          <h1 className="motion-preset-slide-up-md font-testimonia text-6xl font-normal motion-delay-200 motion-ease-spring-snappy md:text-8xl">
            Crossroads
          </h1>
          <p className="motion-preset-slide-up-md leading-normal text-neutral-600 motion-delay-500 motion-ease-spring-snappy">
            Crossroads is an immersive choice-based adventure game powered by
            AI, where every decision you make shapes your journey and determin
            your ultimate fate.
          </p>
          <button className="group motion-preset-slide-up-md flex items-center gap-2 rounded-full px-4 py-2 text-sm uppercase ring-1 ring-neutral-600/40 motion-delay-700 motion-ease-spring-snappy md:transition-all md:hover:ring-neutral-600">
            <span>ready to play</span>
            <ArrowRight
              className="size-6 md:transition-transform md:duration-500 md:group-hover:-rotate-45"
              weight="thin"
            />
          </button>
        </span>
      </div>
      <div className="motion-preset-slide-left-md flex flex-col items-end gap-4 rounded-full p-2 px-2 py-4 ring-1 ring-neutral-600/40 motion-delay-700 motion-ease-spring-snappy md:transition-all md:hover:ring-neutral-600">
        <Link href={"https://github.com/deepakrawat31"} target="_blank">
          <GithubLogo
            className="size-6 md:text-neutral-600 md:hover:text-neutral-900"
            weight="light"
          />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/deepak-rawat-987968238/"}
          target="_blank"
        >
          <LinkedinLogo
            className="size-6 md:text-neutral-600 md:hover:text-neutral-900"
            weight="light"
          />
        </Link>
      </div>
    </main>
  );
}

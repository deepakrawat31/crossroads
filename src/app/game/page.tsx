import {
  ArrowLeft,
  ArrowRight,
  QuestionMark,
} from "@phosphor-icons/react/dist/ssr";

export default function Game() {
  return (
    <main className="flex h-[calc(100dvh-48px)] justify-center p-2 md:p-4">
      <div className="flex w-full max-w-xl flex-1 flex-col gap-2 rounded-lg p-2 ring-1 ring-neutral-600 md:ring-neutral-600/30 md:transition-shadow md:duration-300 md:hover:ring-neutral-600">
        <div className="flex-1"></div>
        <div className="flex items-end gap-2">
          <span className="flex flex-1 gap-[1px]">
            <button className="flex-1 rounded-l-full p-2 text-justify ring-1 ring-neutral-600 md:ring-neutral-600/30 md:transition-shadow md:duration-300 md:hover:ring-neutral-600">
              <ArrowLeft className="size-6" />
            </button>
            <button className="flex-1 rounded-r-full p-2 text-justify ring-1 ring-neutral-600 md:ring-neutral-600/30 md:transition-shadow md:duration-300 md:hover:ring-neutral-600">
              <ArrowRight className="size-6" />
            </button>
          </span>
          <button className="group rounded-full bg-neutral-900 p-2 text-neutral-300">
            <QuestionMark className="size-6 md:group-hover:motion-preset-pop md:motion-duration-300 md:motion-ease-spring-smooth" />
          </button>
        </div>
      </div>
    </main>
  );
}

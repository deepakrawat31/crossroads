export default function Home() {
  return (
    <main className="flex h-[calc(100dvh-48px)]">
      <div className="flex flex-1 items-center justify-center overflow-hidden p-2">
        <span className="flex max-w-lg flex-col gap-8">
          <h1 className="font-testimonia motion-preset-slide-right-md text-6xl font-normal motion-delay-200 motion-ease-spring-snappy md:text-8xl">
            Crossroads
          </h1>
          <p className="motion-preset-slide-right-md leading-normal text-neutral-600 motion-delay-500 motion-ease-spring-snappy">
            Crossroads is an immersive choice-based adventure game powered by
            AI, where every decision you make shapes your journey and determines
            your ultimate fate. With infinite possibilities unfolding at every
            turn.
          </p>
        </span>
      </div>
      <div className="flex-1"></div>
    </main>
  );
}

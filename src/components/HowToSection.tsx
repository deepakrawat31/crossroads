"use client";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function HowToSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>(
    {
      root: null, // Observe the viewport
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the element is visible
    },
    true, // Trigger once
  );

  return (
    <section
      className="flex min-h-[calc(100dvh-48px)] flex-col gap-2 p-2"
      ref={ref}
    >
      {isVisible && (
        <>
          <div className="motion-preset-slide-up-md flex justify-center motion-delay-200 motion-ease-spring-snappy">
            <h3 className="font-testimonia text-6xl md:text-8xl">
              how to play:
            </h3>
          </div>
          <div className="flex flex-1 flex-col gap-2 p-2 md:flex-row">
            <span className="max-h-80 flex-1 border-l border-neutral-600 md:border-neutral-600/30 md:transition-all md:hover:border-neutral-600"></span>
            <span className="max-h-80 flex-1 border-l border-neutral-600 md:border-neutral-600/30 md:transition-all md:hover:border-neutral-600"></span>
            <span className="max-h-80 flex-1 border-l border-neutral-600 md:border-neutral-600/30 md:transition-all md:hover:border-neutral-600"></span>
          </div>
        </>
      )}
    </section>
  );
}

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

  const rules = [
    {
      id: 1,
      text: "There are multiple possible endings based on the choices you make. Endings can range from triumphant to tragic, reflecting the morality and strategy of your decisions.",
    },
    {
      id: 2,
      text: "Not all outcomes are obvious. A seemingly minor choice might have major consequences.",
    },
    {
      id: 3,
      text: "The AI adapts to your playstyle and choices, tailoring the story to your decisions. No two players will experience the exact same journey, even if they make similar choices.",
    },
  ];

  return (
    <section
      className="flex min-h-[calc(100dvh-48px)] flex-col gap-2 p-2"
      ref={ref}
    >
      {isVisible && (
        <>
          <div className="motion-preset-slide-up-md flex justify-center pt-4 motion-delay-200 motion-ease-spring-snappy">
            <h3 className="font-testimonia text-6xl md:text-8xl">
              how it works:
            </h3>
          </div>
          <div className="motion-preset-slide-up-md flex flex-1 items-center justify-center motion-delay-500 motion-ease-spring-snappy">
            <ul className="flex max-w-lg flex-col gap-8">
              {rules.map((rule) => (
                <li key={rule.id} className="flex gap-2 md:gap-4">
                  <small className="text-base">{rule.id}.</small>
                  <p className="text-justify text-sm leading-normal">
                    {rule.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  );
}

import { useEffect, useRef, useState } from "react";

type Options = IntersectionObserverInit;

function useIntersectionObserver<T extends HTMLElement>(
  options: Options,
  triggerOnce: boolean = true, // Optional parameter to trigger only once
): [React.RefObject<T>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry], obs) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);

        if (triggerOnce && ref.current) {
          obs.unobserve(ref.current); // Stop observing after the first trigger
        }
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options, triggerOnce]);

  return [ref, isIntersecting];
}

export default useIntersectionObserver;

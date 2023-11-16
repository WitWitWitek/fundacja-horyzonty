import { useEffect, useRef, Ref } from "react";
import { navColorVersion } from "../page";

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0.9,
};

export function useVisible() {
  //@TODO: delete ANY
  const elementRef = useRef<any>();

  useEffect(() => {
    if (elementRef.current) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          console.log(entry);
          const navbar = document.getElementById("nav-list");
          const navType = (
            elementRef.current as unknown as HTMLElement
          ).getAttribute("data-navtype");
          if (navType) {
            const navClassList = navbar?.classList;
            if (navClassList?.contains(navColorVersion.blue)) {
              navClassList.remove(navColorVersion.blue);
            } else if (navClassList?.contains(navColorVersion.white)) {
              navClassList.remove(navColorVersion.white);
            }
            navClassList && navClassList.add(navType);
          }
        }
      }, options);

      observer.observe(elementRef.current);

      return () => observer.unobserve(elementRef.current!);
    }
  }, []);

  return { elementRef };
}

import { useEffect } from "react";
import { ElementOrSelector, useAnimate, stagger } from "framer-motion";

type useAnimationProps = {
  elementToAnimate: ElementOrSelector;
  staggerTime: number;
};

const useAnimation = (props: useAnimationProps) => {
  const { elementToAnimate, staggerTime } = props;
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      elementToAnimate,
      {
        y: 0,
        opacity: 1,
      },
      {
        duration: 1,
        delay: stagger(staggerTime),
      }
    );
  }, []);

  return scope;
};

export default useAnimation;

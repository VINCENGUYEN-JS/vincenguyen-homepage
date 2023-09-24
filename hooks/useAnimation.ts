import { useEffect } from "react";
import { ElementOrSelector, useAnimate, stagger } from "framer-motion";

import type { ApolloError } from "@apollo/client";

type useAnimationProps = {
  elementToAnimate: ElementOrSelector;
  staggerTime: number;
  loading?: boolean;
  error?: ApolloError;
};

const useAnimation = (props: useAnimationProps) => {
  const { elementToAnimate, staggerTime, loading, error } = props;
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!loading && !error) {
      animate(
        elementToAnimate,
        {
          y: 0,
          opacity: 1,
        },
        {
          duration: 1,
          delay: stagger(staggerTime, { startDelay: 0.15 }),
        }
      );
    }
  }, [loading, error]);

  return scope;
};

export default useAnimation;

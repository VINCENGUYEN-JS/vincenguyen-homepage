import { motion, isValidMotionProp } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

//https://chakra-ui.com/getting-started/with-framer

type SectionProps = {
  children: React.ReactNode;
  delay: number;
};

const StyledDiv = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Section = ({ children, delay = 0 }: SectionProps) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    // @ts-expect-error:no problem in operations
    transition={{ duration: 1, delay }}
  >
    {children}
  </StyledDiv>
);

export default Section;

import { motion, isValidMotionProp } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const StyledSection = chakra(motion.section, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

type SectionProps = {
  children: React.ReactNode;
} & Parameters<typeof StyledSection>[0];

const Section = (props: SectionProps) => (
  <StyledSection
    initial={{ y: 10, opacity: 0 }}
    {...props}
    // transition={{ duration: 1, delay }}
  >
    {props.children}
  </StyledSection>
);

export default Section;

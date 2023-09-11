import styled from "@emotion/styled";
import { CSSObject } from "@emotion/react"; // Import CSSObject from @emotion/react

type SectionProps = {
  children: React.ReactNode;
  marginBottom?: string;
};

const hiddenSectionStyles = (props: SectionProps): CSSObject => ({
  y: 10,
  opacity: 0,
  marginBottom: `${props.marginBottom}px`, // Add px unit here
});

const HiddenSection = styled.section<SectionProps>(hiddenSectionStyles); // Pass SectionProps to styled component

const Section = (props: SectionProps) => (
  <HiddenSection {...props}>{props.children}</HiddenSection>
);

export default Section;

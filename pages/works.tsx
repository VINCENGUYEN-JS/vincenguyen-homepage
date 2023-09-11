import { Container, Heading } from "@chakra-ui/react";
import Section from "../components/animation/Section";
import { WorkCard } from "../components/griditem/GridItem";

import useAnimation from "../hooks/useAnimation";
import CustomHead from "../components/seo";
import thumbPricefx from "../public/images/works/pricefx-eyecatch.png";

const Works = () => {
  const ref = useAnimation({ elementToAnimate: "section", staggerTime: 0.2 });
  return (
    <>
      <CustomHead
        title="Vince Nguyen: Frontend Developer Portfolio"
        description="Explore Vince Nguyen's impressive portfolio of projects developed using React.js. Discover a collection of modern, interactive, and responsive web applications."
        imageUrl="images/avartar.jpg"
        url="vincenguyen.dev/works"
      />
      <main>
        <Container mt={3} ref={ref}>
          <Heading as="h3" variant="section" fontSize={20} mb={4}>
            Works
          </Heading>
          <Section marginBottom="4">
            <WorkCard title="Pricefx" thumbnail={thumbPricefx} />
          </Section>
        </Container>
      </main>
    </>
  );
};

export default Works;

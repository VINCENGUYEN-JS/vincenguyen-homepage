import { Heading } from "@chakra-ui/react";
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
        title="Vince Nguyen: Works"
        description="Explore Vince Nguyen's impressive portfolio of projects developed using React.js. Discover a collection of modern, interactive, and responsive web applications."
        imageUrl="images/avartar.jpg"
        url="vincenguyen.dev/works"
      />
      <main ref={ref}>
        <Heading as="h2" variant="section" fontSize={30} mb={8} mt={8}>
          Works
        </Heading>
        <Section marginBottom="4">
          <WorkCard title="Pricefx" thumbnail={thumbPricefx} />
        </Section>
      </main>
    </>
  );
};

export default Works;

import React from "react";

import {
  Container,
  Box,
  Heading,
  Link,
  ListIcon,
  VisuallyHidden,
  List,
  ListItem,
  Highlight,
} from "@chakra-ui/react";
import { IoLogoGithub, IoLogoYoutube, IoLogoLinkedin } from "react-icons/io5";

import useTypewriter from "../hooks/useTypewriter";
import Paragraph from "../components/typo/Paragraph";
import BackToTop from "../components/buttons/BackToTopButton";
import DownloadButton from "../components/buttons/DownloadButton";
import { GridItem } from "../components/griditem/GridItem";
import { BioSection, BioYear } from "../components/typo/Bio";
import Section from "../components/animation/Section";
import useAnimation from "../hooks/useAnimation";

import CustomHead from "../components/seo";
import thumbYoutube from "../public/images/pricefx-engineer-meetings.jpg";

// index.tsx will only be rendered with access /

const Page = () => {
  const displayText = useTypewriter(
    "👋 I 'm a Frontend developer based in VietNam!",
    60
  );
  const ref = useAnimation({ elementToAnimate: "section", staggerTime: 0.5 });

  return (
    <>
      <CustomHead
        title="Vince Nguyen: Portfolio"
        description="Welcome to Vince Nguyen's portfolio showcasing amazing projects and skills."
        imageUrl="images/avartar.jpg"
        url="vincenguyen.dev"
      />
      <BackToTop />
      <main>
        <Container mt={5} ref={ref}>
          <Box
            borderRadius="lg"
            bgColor="alpha.300"
            p={3}
            mb={6}
            textAlign="center"
          >
            {displayText}
          </Box>
          <Box display={{ md: "flex" }}>
            <Box flexGrow={1}>
              <Heading as="h2">Vince Nguyen</Heading>
              <p>Software Engineer / Designer</p>
            </Box>
          </Box>
          <Section marginBottom="16">
            <Heading as="h3" variant="section">
              Work
            </Heading>
            <Paragraph>
              <Highlight
                query={[
                  "experienced front-end developer",
                  "TypeScript and React",
                  "Web Core",
                  "Webpack",
                  "design systems",
                  "design guidelines",
                  "write various types of tests",
                  "staying updated",
                  "enthusiastic",
                ]}
                styles={{
                  px: "1",
                  py: "1",
                  rounded: "full",
                  bg: "teal.100",
                  whiteSpace: "normal",
                }}
              >
                Vince is an experienced front-end developer with a strong skill
                set in bridging the gap between system complexity and
                user-friendly interfaces, particularly from an enterprise
                perspective. He has a passion for meaningful UX/UI elements into
                complex systems, making them more intuitive and user-friendly.
                He excel in crafting captivating web and mobile app designs,
                utilizing TypeScript and React to ensure seamless and efficient
                user experiences. Proficient in setting up Webpack for complex
                projects, He streamline development processes. A core strength
                lies in his comprehensive understanding of Design Systems for
                enterprise applications, encompassing elements like color
                palettes, typography, and layout , etc. He meticulously align
                his work with established design guidelines to enhance overall
                coherence and user experience. For enterprise applications, He
                consistently write various types of tests, including unit tests,
                component tests, and automation tests using tools like Cypress.
                This commitment to thorough testing ensures the reliability and
                stability of the applications He works on. With a commitment to
                staying updated on industry trends and an enthusiastic attitude
                to learn new things and contribute to the company
              </Highlight>
            </Paragraph>
            <Box textAlign="center" mt="6">
              <DownloadButton />
            </Box>
          </Section>
          <Section marginBottom="16">
            <Heading as="h3" variant="section">
              Experience
            </Heading>
            <BioSection>
              <BioYear>2018</BioYear>
              Software Engineer (KMS Technology, Inc. · Full-time)
            </BioSection>
            <BioSection>
              <BioYear>2019 to present</BioYear>
              Software Engineer (Pricefx, Inc. · Full-time)
            </BioSection>
          </Section>
          <Section marginBottom="16">
            <Heading as="h3" variant="section">
              I ♥
            </Heading>
            <Paragraph>Art, Music, Photography </Paragraph>
          </Section>
          <Section marginBottom="16">
            <Heading as="h3" variant="section">
              On Web
            </Heading>
            <List spacing={3}>
              <ListItem>
                <Link
                  href="https://github.com/VINCENGUYEN-JS"
                  color="accent.300"
                  isExternal
                >
                  <ListIcon as={IoLogoGithub} />
                  @vincenguyen
                  <VisuallyHidden>GitHub profile</VisuallyHidden>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://www.youtube.com/watch?v=YtslW2rObDo&t=6s"
                  isExternal
                  color="accent.300"
                >
                  <ListIcon as={IoLogoYoutube} />
                  @vincenguyen
                  <VisuallyHidden>Youtube channel</VisuallyHidden>
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://www.linkedin.com/in/vincenguyendev"
                  isExternal
                  color="accent.300"
                >
                  <ListIcon as={IoLogoLinkedin} />
                  @vincenguyen
                  <VisuallyHidden>Linked profile</VisuallyHidden>
                </Link>
              </ListItem>
            </List>
          </Section>
          <Section>
            <GridItem
              href="https://www.youtube.com/watch?v=YtslW2rObDo&t=582s"
              title="Business trip to Prague"
              thumbnail={thumbYoutube}
            >
              My Youtube Channel
              <VisuallyHidden>A business trip to Prague</VisuallyHidden>
            </GridItem>
          </Section>
        </Container>
      </main>
    </>
  );
};

export default Page;

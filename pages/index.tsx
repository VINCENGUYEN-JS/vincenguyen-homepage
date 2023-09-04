import React from "react";
import {
  Container,
  Box,
  Heading,
  Link,
  Button,
  List,
  ListItem,
  Highlight,
  SimpleGrid,
} from "@chakra-ui/react";
import { IoLogoGithub, IoLogoYoutube, IoLogoLinkedin } from "react-icons/io5";

import useTypewriter from "../hooks/useTypewriter";
import Section from "../components/animation/Section";
import Layout from "../components/layouts/article";
import Paragraph from "../components/typo/Paragraph";
import BackToTop from "../components/buttons/BackToTopButton";
import DownloadButton from "../components/buttons/DownloadButton";
import { GridItem } from "../components/griditem/GridItem";
import { BioSection, BioYear } from "../components/typo/Bio";
import CustomHead from "../components/seo";
import thumbYoutube from "../public/images/pricefx-engineer-meetings.jpg";

// index.tsx will only be rendered with access /

const Page = () => {
  const displayText = useTypewriter(
    "Hello , I 'm a React developer based in VietNam!",
    60
  );
  return (
    <Layout>
      <CustomHead
        title="Vince Nguyen: Portfolio"
        description="Welcome to Vince Nguyen's portfolio showcasing amazing projects and skills."
        imageUrl="images/avartar.jpg"
        url="vincenguyen.dev"
      />
      <BackToTop />
      <Container mt={5}>
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
        <Section delay={0.1}>
          <Heading as="h3" variant="section">
            Work
          </Heading>
          <Paragraph>
            <Highlight
              query={[
                "experienced front-end developer",
                "infusing meaningful UX/UI elements into complex systems",
                "TypeScript and React",
                "Web Core",
                "Webpack",
                "design system",
                "design guidelines",
                "various types of tests",
                "Cypress",
                "staying updated",
                "enthusiastic attitude",
              ]}
              styles={{ px: "1", py: "1", rounded: "full", bg: "yellow.100" }}
            >
              I&apos;m an experienced front-end developer with a strong skill
              set in bridging the gap between system complexity and
              user-friendly interfaces, particularly from an enterprise
              perspective. I have a passion for infusing meaningful UX/UI
              elements into complex systems, making them more intuitive and
              user-friendly.. I excel in crafting captivating web and mobile app
              designs, utilizing TypeScript and React to ensure seamless and
              efficient user experiences. Proficient in setting up Webpack for
              complex projects, I streamline development processes. A core
              strength lies in my comprehensive understanding of Design Systems
              for enterprise applications, encompassing elements like color
              palettes, typography, and layout , etc. I meticulously align my
              work with established design guidelines to enhance overall
              coherence and user experience. For enterprise applications, I
              consistently write various types of tests, including unit tests,
              component tests, and automation tests using tools like Cypress.
              This commitment to thorough testing ensures the reliability and
              stability of the applications I work on. With a commitment to
              staying updated on industry trends and an enthusiastic attitude to
              learn new things and contribute to the company
            </Highlight>
          </Paragraph>
          <Box textAlign="center" mt="6">
            <DownloadButton />
          </Box>
        </Section>
        <Section delay={0.2}>
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
        <Section delay={0.3}>
          <Heading as="h3" variant="section">
            I ♥
          </Heading>
          <Paragraph>Art, Music, Photography </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section">
            On Web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/VINCENGUYEN-JS" target="_blank">
                <Button
                  variant="ghost"
                  color="accent.300"
                  leftIcon={<IoLogoGithub />}
                >
                  @vincenguyen
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.youtube.com/channel/UCzA_0Qzz-0E-plipIsF3Jew"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  color="accent.300"
                  leftIcon={<IoLogoYoutube />}
                >
                  @vincenguyen
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/vinh-nguyen-quang-44683a1b2/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  color="accent.300"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @vincenguyen
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
        <SimpleGrid column={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/watch?v=YtslW2rObDo&t=582s"
            title="Business trip to Prague"
            thumbnail={thumbYoutube}
          >
            My Youtube Channel
          </GridItem>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Page;

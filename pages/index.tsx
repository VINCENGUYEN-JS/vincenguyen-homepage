import React from "react";
import {
  Container,
  Box,
  Heading,
  // Image,
  Link,
  Button,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { IoLogoGithub, IoLogoYoutube, IoLogoLinkedin } from "react-icons/io5";

import useTypewriter from "../hooks/useTypewriter";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import Paragraph from "../components/paragraph";
import DownloadButton from "../components/DownloadButton";
import { GridItem } from "../components/grid-item";
import { BioSection, BioYear } from "../components/bio";
import thumbYoutube from "../public/images/pricefx-engineer-meetings.jpg";

const Page = () => {
  const displayText = useTypewriter(
    "Hello , I 'm a React developer based in VietNam!",
    60
  );
  return (
    <Layout>
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
          {/* <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
              src="/images/vincenguyen.jpg"
              alt="Profile Image"
            />
          </Box> */}
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section">
            Work
          </Heading>
          <Paragraph>
            As a front-end developer with more than 3 years of experience, my
            job involves designing and implementing user interfaces for web and
            mobile applications. I use a variety of technologies, including
            HTML, CSS, and JavaScript, to create interactive, responsive, and
            visually appealing designs that enhance the user experience. I work
            closely with back-end developers and designers to ensure that the
            final product is functional and meets the clients requirements. In
            addition to coding, I also stay up-to-date on the latest design
            trends and user experience best practices, and I am able to
            communicate effectively with project managers, designers, and other
            stakeholders to ensure that projects are delivered on time
          </Paragraph>
          <Box textAlign="center" mt="6">
            <DownloadButton />
          </Box>
        </Section>
        <Section delay={0.2} mb={6}>
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
        <Section delay={0.3} mb={6}>
          <Heading as="h3" variant="section">
            I ♥
          </Heading>
          <Paragraph>Art, Music, Photography </Paragraph>
        </Section>
        <Section delay={0.4} mb={6}>
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

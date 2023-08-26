import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Section from "../components/section";
import { WorkGridItem } from "../components/GridItem";
import Layout from "../components/layouts/article";

import CustomHead from "../components/seo";
import thumbPricefx from "../public/images/works/pricefx-eyecatch.png";
import thumbDevBlog from "../public/images/works/devblog.png";
import thumbDentist from "../public/images/works/dentish-eyecatch.png";

const Animation = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: -120 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.5 }}
  >
    {children}
  </motion.div>
);

const Works = () => {
  return (
    <Layout>
      <CustomHead
        title="Vince Nguyen: Frontend Developer Portfolio"
        description="Explore Vince Nguyen's impressive portfolio of projects developed using React.js. Discover a collection of modern, interactive, and responsive web applications."
        imageUrl="images/avartar.jpg"
        url="vincenguyen.dev/works"
      />
      <Container mt={3}>
        <Animation>
          <Box
            borderRadius="lg"
            bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            p={3}
            mb={6}
            textAlign="center"
          >
            This is a collection of my professional works
          </Box>
        </Animation>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem id="pricefx" title="Pricefx" thumbnail={thumbPricefx}>
              Pricing software
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem id="devblog" title="DevBlog" thumbnail={thumbDevBlog}>
              A blog to share content with the others
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem id="dentist" title="Dentist" thumbnail={thumbDentist}>
              Your Number 1 Dental Clinic in Vietnam for Dental Implants
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;

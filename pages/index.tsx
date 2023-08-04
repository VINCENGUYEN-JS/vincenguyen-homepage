import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  // Image,
  Link,
  Button,
  List,
  ListItem,
  useColorModeValue,
  SimpleGrid
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { GridItem } from '../components/grid-item'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoYoutube, IoLogoLinkedin } from 'react-icons/io5'
import thumbYoutube from '../public/images/pricefx-engineer-meetings.jpg'

const Page = () => {
  return (
    <Layout>
      <Container mt={3}>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello , I &apos;m a React developer based in VietNam!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Vince Nguyen
            </Heading>
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
          <Heading as="h3" variant="section-title">
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
          <Box textAlign="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
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
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Art, Music, Photography </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            On Web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/VINCENGUYEN-JS" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
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
                  colorScheme="teal"
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
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @vincenguyen
                </Button>
              </Link>
            </ListItem>
          </List>
          <SimpleGrid column={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://www.youtube.com/watch?v=YtslW2rObDo&t=582s"
              title="Business trip to Prague"
              thumbnail={thumbYoutube}
            >
              My Youtube Channel
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page

import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbPricefx from '../public/images/works/pricefx-eyecatch.png'

const Animation = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: -120 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.5 }}
  >
    {children}
  </motion.div>
)

const Works = () => {
  return (
    <Layout title="Works">
      <Container mt={3}>
        <Animation>
          <Box
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={3}
            mb={6}
            align="center"
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
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works

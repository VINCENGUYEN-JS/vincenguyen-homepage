import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Pricefx">
      <Container mt={5}>
        <Title>
          Pricefx <Badge>2019</Badge>
        </Title>
        <P>
          At its core, it simply helps companies determine the optimal price for
          their goods and services. It uses advanced methods to process large
          amounts of historical data to quickly spit out an optimal price
          recommendation. As well, pricing software factors in market
          conditions, competitive analysis, promotions, product availability and
          revenue goals to make the best competitive pricing strategy.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.pricefx.com/">
              https://www.pricefx.com/
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, RecoilJS, LESS, Ant-Design, TypeScript</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/pricelists.png" alt="price-list" />
        <WorkImage
          src="/images/works/pricelistform.png"
          alt="price-list-form"
        />
        <WorkImage
          src="/images/works/calculationgridform.png"
          alt="calculation-grid-form"
        />
      </Container>
    </Layout>
  )
}

export default Work

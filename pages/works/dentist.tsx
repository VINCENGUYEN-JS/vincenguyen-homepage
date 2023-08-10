import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout>
      <Container mt={5}>
        <Title>
          Dentist <Badge>2023</Badge>
        </Title>
        <P>
          Welcome to our online dental clinic website, where we strive to
          provide the best dental care services to our patients in the comfort
          of their own homes. Our website is designed to offer you a
          user-friendly and informative experience, giving you access to a wide
          range of dental care services and information.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://nhakhoassd.com">https://nhakhoassd.com</Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, MUI , TypeScript</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/capcuurang.png" alt="capcuurang" />
        <WorkImage src="/images/works/datlichkham.png" alt="datlichkham" />
        <WorkImage src="/images/works/doingu.png" alt="doingu" />
      </Container>
    </Layout>
  );
};

export default Work;

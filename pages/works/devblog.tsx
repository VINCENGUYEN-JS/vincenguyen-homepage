import { Container, Link, List, ListItem } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
  return (
    <Layout>
      <Container mt={5}>
        <Title>Dev Blog</Title>
        <P>
          Build a complex webapp inspired by sites Dev.to and Medium,
          featuring... 👨‍🎤 Custom Firebase usernames 📰 Bot-friendly content
          (SEO) 🦾 Advanced SSR, SSG, and ISR techniques 🔥 Firestore CRUD and
          data modeling ⚛️ Reactive forms with react-hook-form 📂 Image file
          uploads 💞 Realtime hearts 🚀 Security & Deployment
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://dev-community-phi.vercel.app/">
              https://dev-community-phi.vercel.app/
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NextJS , Firebase</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/posts.png" alt="posts" />
        <WorkImage src="/images/works/manage-post.png" alt="manage-post" />
        <WorkImage src="/images/works/edit-post.png" alt="edit-post" />
      </Container>
    </Layout>
  );
};

export default Work;

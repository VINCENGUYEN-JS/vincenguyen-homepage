import { Heading, Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { useQuery, gql } from "@apollo/client";

import useAnimation from "../hooks/useAnimation";
import Section from "../components/animation/Section";
import CustomHead from "../components/seo";
import PostCard from "../components/postcard/PostCard";
import BackToTop from "../components/buttons/BackToTopButton";

const BLOG_QUERY = gql`
  {
    publication(host: "vincenguyen.hashnode.dev") {
      title
      posts(first: 10) {
        edges {
          node {
            title
            brief
            views
            url
            reactionCount
            subtitle
            tags {
              name
            }
            coverImage {
              url
            }
            seo {
              title
              description
            }
            readTimeInMinutes
          }
        }
      }
    }
  }
`;

const Posts = () => {
  const { data, loading, error } = useQuery(BLOG_QUERY);
  const ref = useAnimation({
    elementToAnimate: "section",
    staggerTime: 0.2,
    loading,
    error,
  });
  const blogPostDetail = data?.publication?.posts?.edges;

  console.log({ data });

  return (
    <>
      <CustomHead
        title="Vince Nguyen: Frontend Developer Portfolio"
        description="Explore Vince Nguyen's blog posts"
        imageUrl="images/avartar.jpg"
        url="vincenguyen.dev/works"
      />
      <BackToTop />
      <main ref={ref}>
        <Heading as="h1" size="xl" mb={8} mt={8} textAlign="center">
          Posts
        </Heading>
        {error && (
          <Alert
            status="error"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="full"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle>{error.message}</AlertTitle>
          </Alert>
        )}
        {blogPostDetail?.map(({ node }: any, idx: number) => (
          <Section marginBottom="16" key={idx}>
            <PostCard
              isLoading={loading}
              tags={node.tags}
              title={node.title}
              subTitle={node.subtitle}
              link={node.url}
              readTimeInMinutes={node.readTimeInMinutes}
              altImg={node.seo.title}
              imgURL={node.coverImage.url}
              views={node.views}
            />
          </Section>
        ))}
      </main>
    </>
  );
};

export default Posts;

import { Heading, Skeleton } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";

import useAnimation from "../hooks/useAnimation";
import Section from "../components/animation/Section";
import CustomHead from "../components/seo";
import PostCard from "../components/postcard/PostCard";
import BackToTop from "../components/buttons/BackToTopButton";
import Error from "../components/error/Error";
import { BLOG_QUERY } from "../graphql-client/queries";

const Posts = () => {
  const { data, loading, error } = useQuery(BLOG_QUERY);
  const ref = useAnimation({
    elementToAnimate: "section",
    staggerTime: 0.2,
    loading,
    error,
  });
  const blogPostDetail = data?.publication?.posts?.edges;

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
        {error ? (
          <Error message={error.message} />
        ) : (
          blogPostDetail?.map(({ node }: any, idx: number) => (
            <Section marginBottom="16" key={idx}>
              <Skeleton isLoaded={!loading}>
                <PostCard
                  tags={node.tags}
                  title={node.title}
                  subTitle={node.subtitle}
                  link={node.url}
                  readTimeInMinutes={node.readTimeInMinutes}
                  altImg={node.seo.title}
                  imgURL={node.coverImage.url}
                  views={node.views}
                />
              </Skeleton>
            </Section>
          ))
        )}
      </main>
    </>
  );
};

export default Posts;

import { Heading } from "@chakra-ui/react";

import useAnimation from "../hooks/useAnimation";
import Section from "../components/animation/Section";
import CustomHead from "../components/seo";
import PostCard from "../components/postcard/PostCard";

const Posts = () => {
  const ref = useAnimation({ elementToAnimate: "section", staggerTime: 0.2 });
  return (
    <>
      <CustomHead
        title="Vince Nguyen: Frontend Developer Portfolio"
        description="Explore Vince Nguyen's blog posts"
        imageUrl="images/avartar.jpg"
        url="vincenguyen.dev/works"
      />
      <main ref={ref}>
        <Heading as="h3" variant="section" fontSize={20} mb={4}>
          Posts
        </Heading>
        <Section marginBottom="4">
          <PostCard />
        </Section>
      </main>
    </>
  );
};

export default Posts;

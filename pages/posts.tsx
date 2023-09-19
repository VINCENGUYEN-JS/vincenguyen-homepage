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
        <Heading as="h1" size="xl" mb={8} mt={8} textAlign="center">
          Posts
        </Heading>
        <Section marginBottom="4">
          <PostCard
            topic="CSS/Images/UI-UX"
            title="Understand images for web developers"
            subTitle="Images are hard to get"
            link="https://vincenguyen.hashnode.dev/understand-images-for-web-developers"
            altImg="images"
            imgURL="https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/yUTgdQkbd7c/upload/9bb906781fd987302ed7ecd030d9dc70.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
          />
        </Section>
      </main>
    </>
  );
};

export default Posts;

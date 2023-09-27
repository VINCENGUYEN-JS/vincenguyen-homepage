import React, { useEffect } from "react";
import {
  Heading,
  Skeleton,
  FormControl,
  FormLabel,
  Switch,
  Image,
  Stack,
  Text,
  Tag,
  Box,
  SkeletonText,
  LinkOverlay,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { useQuery } from "@apollo/client";

import CustomHead from "../components/seo";
import PostCard from "../components/postcard/PostCard";
import BackToTop from "../components/buttons/BackToTopButton";
import Error from "../components/error/Error";
import { BLOG_QUERY } from "../graphql-client/queries";

const selectPost = (data: any) =>
  data?.publication?.posts?.edges.map(({ node }: any) => node);

function sortByViews(posts: Array<any>) {
  const sortedArray = [...posts]; // Create a copy of the current state array
  sortedArray.sort((a, b) => b.views - a.views); // Sort by views in descending order
  return sortedArray;
}

const Post = () => {
  const { data, loading, error } = useQuery(BLOG_QUERY);
  const [blogPost, setBlogPost] = React.useState<Array<any>>([]);
  const [toggle, setToggle] = React.useState(false);
  const orignalBlogPost = React.useRef(blogPost);

  useEffect(() => {
    if (data) {
      const blogPost = selectPost(data);
      setBlogPost(blogPost);
      orignalBlogPost.current = blogPost;
    }
  }, [data]);

  return (
    <>
      <CustomHead
        title="Vince Nguyen:Blog Posts"
        description="Explore Vince Nguyen's blog post"
        imageUrl="images/avartar.jpg"
        url="vincenguyen.dev/works"
      />
      <BackToTop />
      <main>
        <Heading as="h1" size="xl" mb={8} mt={8} textAlign="center">
          Post
        </Heading>
        <FormControl display="flex" alignItems="center" mb="8">
          <FormLabel htmlFor="isChecked" mb="0">
            🔥 Top popular posts
          </FormLabel>
          <Switch
            size="md"
            id="isChecked"
            onChange={() => {
              if (!toggle) {
                setBlogPost((posts) => {
                  const newPosts = sortByViews(posts);
                  return newPosts;
                });
              } else {
                setBlogPost(orignalBlogPost.current);
              }
              setToggle((toggle) => !toggle);
            }}
          />
        </FormControl>

        {error ? (
          <Error message={error.message} />
        ) : (
          <>
            {loading
              ? Array(3)
                  .fill(0)
                  .map((_, idx) => (
                    <Skeleton key={idx}>
                      <PostCard
                        renderLeft={() => (
                          <Box
                            maxW={{ base: "100%", sm: "45%" }}
                            height={{ base: "auto", sm: "350" }}
                          />
                        )}
                        renderBody={() => (
                          <SkeletonText
                            mt="4"
                            noOfLines={4}
                            spacing="4"
                            skeletonHeight="2"
                          />
                        )}
                        renderFooter={() => <SkeletonText />}
                      />
                    </Skeleton>
                  ))
              : blogPost?.map((post, idx) => (
                  <PostCard
                    key={idx}
                    renderLeft={() => (
                      <Image
                        objectFit="cover"
                        src={post.coverImage.url}
                        alt={post.seo.title}
                        maxW={{ base: "100%", sm: "45%" }}
                        height={{ base: "auto", sm: "350" }}
                      />
                    )}
                    renderBody={() => {
                      return (
                        <>
                          {post.tags.map((tag: any, idx: number) => (
                            <Tag
                              key={idx}
                              colorScheme="purple"
                              marginInlineEnd="1"
                              marginBlockEnd="2"
                            >
                              {tag.name}
                            </Tag>
                          ))}
                          <Tag>Read : {post.readTimeInMinutes} mins</Tag>
                          <Stack spacing="2" pt="4">
                            <Text
                              fontSize="3xl"
                              fontWeight="semibold"
                              lineHeight="normal"
                            >
                              {post.title}
                            </Text>
                            <Text fontSize="xl">{post.subtitle}</Text>
                          </Stack>
                        </>
                      );
                    }}
                    renderFooter={() => (
                      <>
                        <Heading size="md" my="2" fontWeight="extrabold">
                          <LinkOverlay target="_blank" href={post.url}>
                            READ MORE
                          </LinkOverlay>
                        </Heading>
                        <Heading size="md" my="2" fontWeight="extrabold">
                          <ViewIcon /> {post.views}
                        </Heading>
                      </>
                    )}
                  />
                ))}
          </>
        )}
      </main>
    </>
  );
};

export default Post;

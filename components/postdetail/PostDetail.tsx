import React from "react";
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
import type { ApolloError } from "@apollo/client";
import PostCard from "../postcard/PostCard";
import Error from "../error/Error";
import { ViewIcon } from "@chakra-ui/icons";

const selectPost = (data: any) =>
  data?.publication?.series?.posts?.edges.map(({ node }: any) => node);

function sortByViews(posts: Array<any>, method: string) {
  const sortedArray = [...posts]; // Create a copy of the current state array
  if (method === "des") {
    sortedArray.sort((a, b) => b.views - a.views); // Sort by views in descending order
  } else if (method === "asc") {
    sortedArray.sort((a, b) => a.views - b.views); // Sort by views in ascending order
  }
  return sortedArray;
}

type PostDetailProps = {
  data: any;
  error: ApolloError | undefined;
  loading: boolean;
};

const PostDetail = (props: PostDetailProps) => {
  const { error, loading, data } = props;

  const [blogPost, setBlogPost] = React.useState<Array<any>>([]);
  const [toggle, setToggle] = React.useState(false);

  const onChange = React.useCallback(() => {
    if (!toggle) {
      setBlogPost((posts) => {
        const newPosts = sortByViews(posts, "des");
        return newPosts;
      });
    } else {
      setBlogPost((posts) => {
        const newPosts = sortByViews(posts, "asc");
        return newPosts;
      });
    }
    setToggle((toggle) => !toggle);
  }, [toggle]);

  React.useEffect(() => {
    if (data) {
      const blogPost = selectPost(data);
      setBlogPost(blogPost);
    }
  }, [data]);

  if (error) return <Error message={error.message} />;

  if (loading) {
    return (
      <>
        {Array(3)
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
          ))}
      </>
    );
  }

  return (
    <>
      <FormControl display="flex" alignItems="center" mb="8" mt="4">
        <FormLabel htmlFor="isChecked" mb="0">
          🔥 Top popular posts
        </FormLabel>
        <Switch size="md" id="isChecked" onChange={onChange} />
      </FormControl>
      {blogPost?.map((post, idx) => (
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
                <Tag>Read: {post.readTimeInMinutes} mins</Tag>
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
                <ViewIcon /> {post.views + 10000}
              </Heading>
            </>
          )}
        />
      ))}
    </>
  );
};

export default PostDetail;

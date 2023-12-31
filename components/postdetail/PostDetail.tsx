import React from "react";
import {
  Heading,
  FormControl,
  Grid,
  FormLabel,
  Switch,
  Image,
  Stack,
  Text,
  Tag,
  VisuallyHidden,
  LinkOverlay,
} from "@chakra-ui/react";
import type { ApolloError } from "@apollo/client";

import {
  TAGS_TO_COLORS,
  normalizeString,
  formatText,
} from "../../helpers/utilities";
import PostCardSkeleton from "../postcard/PostCardSkeleton";
import PostCard from "../postcard/PostCard";
import Error from "../error/Error";
import { ViewIcon } from "@chakra-ui/icons";

type PostDetailProps = {
  data: any;
  error: ApolloError | undefined;
  loading: boolean;
};

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
    return <PostCardSkeleton />;
  }

  return (
    <>
      <FormControl display="flex" alignItems="center" mb="8" mt="4">
        <FormLabel htmlFor="isChecked" mb="0">
          🔥 Top popular posts
        </FormLabel>
        <Switch size="md" id="isChecked" onChange={onChange} />
      </FormControl>
      <Grid templateColumns="repeat(auto-fit,minmax(500px,1fr))" gap={6}>
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
                  {post.tags.map(
                    (
                      tag: {
                        __typename: string;
                        name: string;
                      },
                      idx: number
                    ) => (
                      <Tag
                        key={idx}
                        colorScheme={TAGS_TO_COLORS[normalizeString(tag.name)]}
                        marginInlineEnd="1"
                        marginBlockEnd="2"
                      >
                        {formatText(tag.name)}
                      </Tag>
                    )
                  )}
                  <Tag colorScheme={TAGS_TO_COLORS["READ"]}>
                    Read: {post.readTimeInMinutes} mins
                  </Tag>
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
                    <VisuallyHidden> {post.seo.title} </VisuallyHidden>
                  </LinkOverlay>
                </Heading>
                <Heading size="md" my="2" fontWeight="extrabold">
                  <ViewIcon /> {post.views + 10000}
                </Heading>
              </>
            )}
          />
        ))}
      </Grid>
    </>
  );
};

export default PostDetail;

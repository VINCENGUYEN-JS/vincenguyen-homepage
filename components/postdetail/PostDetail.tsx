import React, { useEffect } from "react";
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
import { useQuery } from "@apollo/client";

import { BLOG_QUERY } from "../../graphql-client/queries";
import {
  TAGS_TO_COLORS,
  normalizeString,
  formatText,
  sortByViews,
  sortingTags,
} from "../../helpers/utilities";
import PostCardSkeleton from "../postcard/PostCardSkeleton";
import PostCard from "../postcard/PostCard";
import Error from "../error/Error";
import useLocalStorage from "../../hooks/useLocalStorage";
import { ViewIcon } from "@chakra-ui/icons";

type PostDetailProps = {
  tabToRender: string;
};

const selectPost = (data: any) =>
  data?.publication?.series?.posts?.edges.map(({ node }: any) => node);

const tranformToLocalStorageValue = (blogPost: any) => {
  return blogPost.reduce(
    (
      accumulator: Record<string, number>,
      currentValue: Record<string, any>
    ) => {
      accumulator[currentValue.title] =
        Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
      return accumulator;
    },
    {}
  );
};

const PostDetail = (props: PostDetailProps) => {
  const { tabToRender } = props;

  const [blogPost, setBlogPost] = React.useState<Array<any>>([]);
  const [toggle, setToggle] = React.useState(false);
  const { data, loading, error } = useQuery(BLOG_QUERY, {
    variables: {
      slug: tabToRender,
    },
  });

  const [localStorageValue, updateLocalStorage] = useLocalStorage(
    tabToRender,
    ""
  );

  console.log({ blogPost });

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

  useEffect(() => {
    if (data) {
      const blogPost = selectPost(data);
      setBlogPost(blogPost);
    }
  }, [data]);

  useEffect(() => {
    if (blogPost.length > 0 && localStorageValue === "") {
      updateLocalStorage(tranformToLocalStorageValue(blogPost));
    }
  }, [blogPost, localStorageValue, updateLocalStorage]);

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
                height={{ base: "auto", sm: "autoP" }}
              />
            )}
            renderBody={() => {
              return (
                <>
                  {sortingTags(post.tags).map((tag, idx) => (
                    <Tag
                      key={idx}
                      colorScheme={TAGS_TO_COLORS[normalizeString(tag.name)]}
                      marginInlineEnd="1"
                      marginBlockEnd="2"
                    >
                      {formatText(tag.name)}
                    </Tag>
                  ))}
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
                  <ViewIcon /> {localStorageValue[post.title]}
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

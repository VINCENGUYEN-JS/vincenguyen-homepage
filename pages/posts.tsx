import React, { useEffect } from "react";
import {
  Heading,
  Skeleton,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";
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
  const orignalBlogPost = React.useRef(blogPost);
  const [toggle, setToggle] = React.useState(false);

  useEffect(() => {
    const blogPost = selectPost(data);
    setBlogPost(blogPost);
    orignalBlogPost.current = blogPost;
  }, [data]);

  return (
    <>
      <CustomHead
        title="Vince Nguyen: Frontend Developer Portfolio"
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
            Top popular posts
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
          blogPost?.map((post: any, idx: number) => (
            <section key={idx} style={{ marginBottom: 16 }}>
              <Skeleton isLoaded={!loading}>
                <PostCard
                  tags={post.tags}
                  title={post.title}
                  subTitle={post.subtitle}
                  link={post.url}
                  readTimeInMinutes={post.readTimeInMinutes}
                  altImg={post.seo.title}
                  imgURL={post.coverImage.url}
                  views={post.views}
                />
              </Skeleton>
            </section>
          ))
        )}
      </main>
    </>
  );
};

export default Post;

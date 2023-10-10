import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import { useQuery } from "@apollo/client";

import CustomHead from "../components/seo";
import BackToTop from "../components/buttons/BackToTopButton";
import { BLOG_QUERY } from "../graphql-client/queries";
import PostDetail from "../components/postdetail/PostDetail";

const paramsToTabIndex = [
  "image-for-web-developers",
  "website-graphics",
  "css-tips",
  "javascript",
];

const Post = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const { data, loading, error } = useQuery(BLOG_QUERY, {
    variables: {
      slug: paramsToTabIndex[tabIndex],
    },
  });

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
        <Tabs
          mt={8}
          onChange={(index) => setTabIndex(index)}
          variant="soft-rounded"
          isFitted
        >
          <TabList>
            <Tab>Images</Tab>
            <Tab>Website Graphics</Tab>
            <Tab>CSS</Tab>
            <Tab>Javascript</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <PostDetail data={data} error={error} loading={loading} />
            </TabPanel>
            <TabPanel>
              <PostDetail data={data} error={error} loading={loading} />
            </TabPanel>
            <TabPanel>
              <PostDetail data={data} error={error} loading={loading} />
            </TabPanel>
            <TabPanel>
              <PostDetail data={data} error={error} loading={loading} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </main>
    </>
  );
};

export default Post;

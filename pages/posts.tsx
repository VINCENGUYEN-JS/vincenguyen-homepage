import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import CustomHead from "../components/seo";
import BackToTop from "../components/buttons/BackToTopButton";
import PostDetail from "../components/postdetail/PostDetail";

const paramsToTabIndex = [
  "image-for-web-developers",
  "website-graphics",
  "css-tips",
  "javascript",
];

const Post = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

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
          isLazy
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
            {paramsToTabIndex.map((tabName, idx) => (
              <TabPanel key={idx}>
                <PostDetail tabToRender={paramsToTabIndex[tabIndex]} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </main>
    </>
  );
};

export default Post;

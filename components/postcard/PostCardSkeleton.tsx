import React from "react";
import { Skeleton, Box, SkeletonText } from "@chakra-ui/react";

import PostCard from "./PostCard";

const PostCardSkeleton = () => (
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

export default PostCardSkeleton;

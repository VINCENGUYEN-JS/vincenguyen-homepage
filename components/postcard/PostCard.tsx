import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  Tag,
  Skeleton,
  SkeletonText,
  CardFooter,
  LinkOverlay,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

type Tags = Array<Record<"__typename" | "name", string>>;

type PostCardProps = {
  title: string;
  tags: Tags;
  subTitle: string;
  link: string;
  imgURL: string;
  altImg: string;
  views: string;
  isLoading: boolean;
  readTimeInMinutes: string;
};

const PostCard = (props: PostCardProps) => {
  const isLoaded = !props.isLoading;
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      gap="4"
      shadow="md"
      borderWidth="1px"
    >
      <Skeleton isLoaded={isLoaded} maxW={{ base: "100%", sm: "55%" }}>
        <Image
          objectFit="cover"
          src={props.imgURL}
          alt={props.altImg}
          height="full"
        />
      </Skeleton>

      <Stack spacing={{ sm: 4 }} pb={{ base: 1, sm: 8 }}>
        <CardBody>
          <SkeletonText isLoaded={isLoaded}>
            {props.tags.map((tag) => (
              <Tag
                key={tag.__typename}
                colorScheme="purple"
                marginInlineEnd="1"
                marginBlockEnd="1"
              >
                {tag.name}
              </Tag>
            ))}
            <br />
            <Tag>Read : {props.readTimeInMinutes} mins</Tag>
          </SkeletonText>
          <SkeletonText isLoaded={isLoaded}>
            <Text py="2" fontSize="3xl" fontWeight="semibold">
              {props.title}
            </Text>
          </SkeletonText>
          <SkeletonText isLoaded={isLoaded}>
            <Text py="2" fontSize="xl">
              {props.subTitle}
            </Text>
          </SkeletonText>
        </CardBody>

        <CardFooter justify="space-between" flexWrap="wrap">
          <SkeletonText isLoaded={isLoaded}>
            <Heading size="md" my="2" fontWeight="extrabold">
              <LinkOverlay target="_blank" href={props.link}>
                READ MORE
              </LinkOverlay>
            </Heading>
          </SkeletonText>
          <SkeletonText isLoaded={isLoaded}>
            <Heading size="md" my="2" fontWeight="extrabold">
              <ViewIcon /> {props.views}
            </Heading>
          </SkeletonText>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default PostCard;

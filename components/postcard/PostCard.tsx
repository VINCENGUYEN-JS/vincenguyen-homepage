import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  Tag,
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

  readTimeInMinutes: string;
};

const PostCard = (props: PostCardProps) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      gap="4"
      shadow="md"
      borderWidth="1px"
    >
      <Image
        objectFit="cover"
        src={props.imgURL}
        alt={props.altImg}
        maxW={{ base: "100%", sm: "45%" }}
      />
      <Stack spacing={{ sm: 4 }} pb={{ base: 1, sm: 8 }}>
        <CardBody>
          {props.tags.map((tag, idx) => (
            <Tag
              key={idx}
              colorScheme="purple"
              marginInlineEnd="1"
              marginBlockEnd="2"
            >
              {tag.name}
            </Tag>
          ))}
          <br />
          <Tag>Read : {props.readTimeInMinutes} mins</Tag>

          <Text fontSize="3xl" fontWeight="semibold" lineHeight="normal">
            {props.title}
          </Text>

          <Text fontSize="xl">{props.subTitle}</Text>
        </CardBody>

        <CardFooter justify="space-between" flexWrap="wrap">
          <Heading size="md" my="2" fontWeight="extrabold">
            <LinkOverlay target="_blank" href={props.link}>
              READ MORE
            </LinkOverlay>
          </Heading>
          <Heading size="md" my="2" fontWeight="extrabold">
            <ViewIcon /> {props.views}
          </Heading>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default PostCard;

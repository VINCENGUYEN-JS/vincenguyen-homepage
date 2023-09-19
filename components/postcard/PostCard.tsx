import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  LinkOverlay,
} from "@chakra-ui/react";

type PostCardProps = {
  topic: string;
  title: string;
  subTitle: string;
  link: string;
  imgURL: string;
  altImg: string;
};

function formatInput(input: string): string {
  // Split the input string by '/'
  const parts = input.split("/").map((part) => part.trim());

  // Join the parts with ' / ' separator
  const formattedInput = parts.join(" / ");

  return formattedInput;
}

const PostCard = (props: PostCardProps) => (
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
      maxW={{ base: "100%", sm: "55%" }}
      src={props.imgURL}
      alt={props.altImg}
    />

    <Stack spacing={{ sm: 4 }} pt={{ base: 1, sm: 12 }} pb={{ base: 1, sm: 8 }}>
      <CardBody>
        <Text py="2" textTransform="uppercase" fontSize="xl">
          {formatInput(props.topic)}
        </Text>
        <Text py="2" fontSize="3xl" fontWeight="semibold">
          {props.title}
        </Text>
        <Text py="2" fontSize="xl">
          {props.subTitle}
        </Text>
      </CardBody>

      <CardFooter>
        <Heading size="md" my="2" fontWeight="extrabold">
          <LinkOverlay target="_blank" href={props.link}>
            READ MORE
          </LinkOverlay>
        </Heading>
      </CardFooter>
    </Stack>
  </Card>
);

export default PostCard;

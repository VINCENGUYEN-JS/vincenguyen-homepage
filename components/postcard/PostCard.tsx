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

const PostCard = () => (
  <Card
    direction={{ base: "column", sm: "row" }}
    overflow="hidden"
    variant="outline"
    boxShadow="xl"
  >
    <Image
      objectFit="cover"
      maxW={{ base: "100%", sm: "200px" }}
      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      alt="Caffe Latte"
    />

    <Stack>
      <CardBody>
        <Text py="2">Frontend Development / JS</Text>
        <Heading py="2" size="xl" fontWeight="semibold">
          My first blog
        </Heading>
        <Text py="2" fontSize="2xl">
          Understand how JS works
        </Text>
      </CardBody>

      <CardFooter>
        <Heading size="md" my="2" fontWeight="extrabold">
          <LinkOverlay
            target="_blank"
            href="https://medium.com/@nguyenquangv95/this-is-my-first-blog-282b45ee4b50"
          >
            READ MORE
          </LinkOverlay>
        </Heading>
      </CardFooter>
    </Stack>
  </Card>
);

export default PostCard;

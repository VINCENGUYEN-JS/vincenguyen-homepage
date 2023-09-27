import React from "react";
import { Card, Stack, CardBody, CardFooter, CardProps } from "@chakra-ui/react";

type PostCardProps = {
  renderLeft: () => React.ReactNode;
  renderBody: () => React.ReactNode;
  renderFooter: () => React.ReactNode;
} & CardProps;

const PostCard = (props: PostCardProps) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      shadow="md"
      borderWidth="1px"
      mb="8"
    >
      {props.renderLeft()}
      <Stack>
        <CardBody>{props.renderBody()}</CardBody>

        <CardFooter justify="space-between" flexWrap="wrap">
          {props.renderFooter()}
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default PostCard;

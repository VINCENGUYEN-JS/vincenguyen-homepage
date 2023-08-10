import NextLink from "next/link";
import {
  Flex,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";
import NoFound from "../components/NoFound";

const NotFound = () => {
  return (
    <Container>
      <Divider my={6} />
      <Flex direction="column" align="center" gap="10px">
        <NoFound />
        <Heading as="h1">Not Found</Heading>
        <Text>The page you&apos;re looking for was not found</Text>
        <NextLink href="/">
          <Button
            bg="accent.500"
            color="white"
            _hover={{
              bg: "accent.400",
            }}
          >
            Return to home
          </Button>
        </NextLink>
      </Flex>
    </Container>
  );
};

export default NotFound;

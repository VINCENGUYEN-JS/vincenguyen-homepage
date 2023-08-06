import NextLink from "next/link";
import { Heading, Box, Image, Link, Badge } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";

const ImageWrapper = styled.div`
  @media (min-width: 48em) {
    > img {
      transition-property: transform;
      transition-duration: 0.5s;
      transition-timing-function: ease-in-out;
    }
    &:hover > img {
      transform: scale(2);
    }
  }
`;

export const Title = ({ children }) => (
  <Box>
    <Link as={NextLink} href="/works">
      Works
    </Link>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

export const WorkImage = ({ src, alt }) => (
  <ImageWrapper>
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
  </ImageWrapper>
);

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);

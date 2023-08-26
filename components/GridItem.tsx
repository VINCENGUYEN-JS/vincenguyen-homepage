import NextLink from "next/link";
import { Image, ImgProps } from "@chakra-ui/react";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";

type GridItemProps = {
  children: React.ReactNode;
  href?: string;
  title: string;
  thumbnail: ImgProps;
  id?: string;
};

//HREF LINK
export const GridItem = ({
  children,
  href,
  title,
  thumbnail,
}: GridItemProps) => {
  return (
    <Box w="100%">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail.src}
          alt={title}
          borderRadius="md"
          placeholder="blur"
          loading="lazy"
        />
        <Box display="flex" flexDirection="column" alignItems="center">
          <LinkOverlay href={href} target="_blank">
            <Text mt={2}>{title}</Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </Box>
      </LinkBox>
    </Box>
  );
};

//ID LINK
export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
}: GridItemProps) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/works/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <div>
        <Image
          src={thumbnail.src}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
      </div>

      <LinkOverlay as="div" href={`/works/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

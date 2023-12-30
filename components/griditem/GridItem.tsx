import { Image, ImgProps } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  LinkBox,
  Card,
  LinkOverlay,
  CardBody,
  CardFooter,
  Heading,
  Divider,
} from "@chakra-ui/react";

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

type WorkCardProps = {
  title: string;
  thumbnail: ImgProps;
};

export const WorkCard = ({ title, thumbnail }: WorkCardProps) => (
  <LinkBox>
    <Card>
      <Image
        src={thumbnail.src}
        alt={title}
        className="grid-item-thumbnail"
        objectFit="cover"
      />
      <CardBody>
        <Heading size="md">Pricefx</Heading>
        <Text py="2">
          <strong>A leading SaaS Pricing</strong> (Price Optimization &
          Management) and CPQ (Configure-Price-Quote) vendor. Pricefx is the
          global leader in cloud native SaaS software for price optimization and
          management, serving global 1000 companies worldwide. Our product
          boasts
          <strong> outstanding customer reviews </strong>ranging from small
          companies to renowned names such as
          <strong> Michelin, Sonoco, Danone, Avery Dennison</strong> and{" "}
          <strong> Bosch.</strong>
        </Text>
      </CardBody>
      <Divider />
      <CardFooter justify="center">
        <LinkOverlay
          isExternal
          href="https://www.youtube.com/watch?v=VcSDX-B1nrY&t=1s"
          color="accent.300"
        >
          <Text as="span" fontSize="xl">
            Awesome UX/UI
          </Text>
          <ExternalLinkIcon />
        </LinkOverlay>
      </CardFooter>
    </Card>
  </LinkBox>
);

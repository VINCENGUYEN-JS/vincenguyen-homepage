import NextHead from "next/head";

type CustomHeadProps = {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
};

const CustomHead = ({ title, description, imageUrl, url }: CustomHeadProps) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content={description} />

    {/* Facebook Meta Tags */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:url" content={url} />

    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageUrl} />
  </NextHead>
);

export default CustomHead;

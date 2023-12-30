import React from "react";
import { Button, VisuallyHidden } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

const DownloadButton: React.FC = () => {
  const [isLoading, setLoading] = React.useState(false);

  const handleDownload = async () => {
    setLoading(true);

    try {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const pdfPath = "/VinceNguyen.pdf";
      const link = document.createElement("a");
      link.href = pdfPath;
      link.setAttribute("download", "VinceNguyen.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      leftIcon={<DownloadIcon />}
      bg="accent.500"
      color="white"
      size="md"
      isLoading={isLoading}
      onClick={handleDownload}
      loadingText="Downloading"
    >
      <VisuallyHidden>Download</VisuallyHidden>
      My Resume
    </Button>
  );
};

export default DownloadButton;

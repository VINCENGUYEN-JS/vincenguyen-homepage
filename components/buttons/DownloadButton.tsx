import React from "react";
import { Button } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

import useAnalyticsEventTracker from "../../hooks/useAnalyticsEventTracker";

const DownloadButton: React.FC = () => {
  const [isLoading, setLoading] = React.useState(false);
  const gaEventTracker = useAnalyticsEventTracker("Download profile");

  const handleDownload = async () => {
    setLoading(true);
    gaEventTracker("call");

    try {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

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
      My Resume
    </Button>
  );
};

export default DownloadButton;

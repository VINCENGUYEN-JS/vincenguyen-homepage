import React, { useEffect, useState } from "react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";

import debounce from "../../helpers/debounce";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const detectDevice = useBreakpointValue({ base: "mobile", md: "computer" });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      const target = document.documentElement; // Use the <html> element for the window
      let isAtBottom;
      if (detectDevice === "mobile") {
        const distance = 50;
        isAtBottom =
          target.scrollHeight - target.scrollTop <=
          target.clientHeight + distance;
      } else {
        isAtBottom =
          target.scrollHeight - target.scrollTop === target.clientHeight;
      }

      if (isAtBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const debounceToggle = debounce(toggleVisibility, 100);

    window.addEventListener("scroll", debounceToggle);

    return () => window.removeEventListener("scroll", debounceToggle);
  }, [detectDevice]);

  return (
    <>
      {isVisible && (
        <Box
          onClick={scrollToTop}
          position="fixed"
          bottom={{ base: "px", md: "14" }}
          right={{ base: "50%", sm: "50%", md: "15%" }}
          transform="translate(50%)"
          zIndex={3}
        >
          <IconButton
            size={{ base: "sm", md: "md" }}
            isRound={true}
            aria-label="Back To Top"
            icon={<ArrowUpIcon />}
            colorScheme="cyan"
          />
        </Box>
      )}
    </>
  );
}

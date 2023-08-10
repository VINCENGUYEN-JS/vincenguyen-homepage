import React from "react";

const useTypewriter = (text: string, interval = 100): string => {
  const [displayText, setDisplayText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex === text.length) {
        clearInterval(typingInterval);
        return;
      }

      setDisplayText((prevText) => prevText + text[currentIndex]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, interval);

    return () => clearInterval(typingInterval);
  }, [currentIndex, text, interval]);

  return displayText;
};

export default useTypewriter;

import { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <IconButton
      aria-label="Back to top"
      position="fixed"
      bottom={8}
      right={8}
      borderRadius="full"
      size="lg"
      zIndex="overlay"
      shadow="lg"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <FaArrowUp />
    </IconButton>
  );
};

export default ScrollToTopButton;

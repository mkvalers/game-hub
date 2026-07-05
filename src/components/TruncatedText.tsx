import { Text, Link, Heading } from "@chakra-ui/react";
import useTruncatedText from "@/hooks/useTruncatedText";

interface Props {
  text: string;
  maxLength?: number;
}

const TruncatedText = ({ text, maxLength = 40 }: Props) => {
  const { displayText, isTruncated, isExpanded, toggle } = useTruncatedText(
    text,
    maxLength,
  );

  return (
    <Heading fontSize="2xl">
      {displayText}
      {isTruncated && (
        <Link ml={1} fontSize="md" onClick={toggle} color="gray.400">
          {isExpanded ? "See less" : "See more"}
        </Link>
      )}
    </Heading>
  );
};

export default TruncatedText;

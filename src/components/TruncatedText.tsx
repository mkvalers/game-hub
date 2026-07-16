import { Button, Text } from "@chakra-ui/react";
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
    <Text>
      {displayText}
      {isTruncated && (
        <Button
          ml={1}
          fontSize="md"
          onClick={toggle}
          color="gray.00"
          size={"2xs"}
          variant={"subtle"}
        >
          {isExpanded ? "Show less" : "Read more"}
        </Button>
      )}
    </Text>
  );
};

export default TruncatedText;

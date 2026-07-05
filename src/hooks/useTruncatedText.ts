import { useState, useMemo } from "react";

interface UseTruncatedTextResult {
  displayText: string;
  isTruncated: boolean;
  isExpanded: boolean;
  toggle: () => void;
}

const useTruncatedText = (
  text: string,
  maxLength: number = 40
): UseTruncatedTextResult => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isTruncated = text.length > maxLength;

  const displayText = useMemo(() => {
    if (!isTruncated || isExpanded) return text;
    return text.slice(0, maxLength).trimEnd() + "...";
  }, [text, maxLength, isExpanded, isTruncated]);

  const toggle = () => setIsExpanded((prev) => !prev);

  return { displayText, isTruncated, isExpanded, toggle };
};

export default useTruncatedText;
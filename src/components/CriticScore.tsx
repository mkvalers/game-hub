import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const colorPalette = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <Badge
      colorPalette={colorPalette}
      fontSize="14px"
      px={2}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;

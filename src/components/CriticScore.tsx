import { Badge } from "@chakra-ui/react";
import React from "react";
import { Tooltip } from "./ui/tooltip";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const colorPalette =
    score > 75 ? "green" : score > 60 ? "yellow" : score > 45 ? "red" : "";

  if (colorPalette === "") return null;

  return (
    <Tooltip content={"Rating: " + score}>
      <Badge
        colorPalette={colorPalette}
        fontSize="14px"
        px={2}
        borderRadius="4px"
      >
        {score}
      </Badge>
    </Tooltip>
  );
};

export default CriticScore;

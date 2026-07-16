import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <HStack width="100%">
      <Box onClick={() => navigate(-1)}>
        <Image src={logo} boxSize={12} flexShrink={0} />
      </Box>
      <Box flex="1" minWidth={0}>
        <SearchInput />
      </Box>
      <ColorModeButton flexShrink={0} />
    </HStack>
  );
};

export default NavBar;

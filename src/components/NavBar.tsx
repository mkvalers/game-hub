import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack width="100%">
      <Image src={logo} boxSize={12} flexShrink={0} />
      <Box flex="1" minWidth={0}>
        <SearchInput />
      </Box>
      <ColorModeButton flexShrink={0} />
    </HStack>
  );
};

export default NavBar;

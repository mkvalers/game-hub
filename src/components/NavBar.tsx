import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} />
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;

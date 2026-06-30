import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack justify={"space-between"}>
      <Image src={logo} />
      <Image src={logo} />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;

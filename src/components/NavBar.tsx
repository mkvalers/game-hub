import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <HStack width="100%">
      <Box
        onClick={() => location.pathname !== "/" && navigate(-1)}
        cursor={"pointer"}
      >
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

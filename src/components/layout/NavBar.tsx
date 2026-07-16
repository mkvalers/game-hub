import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "@/assets/logo.webp";
import { ColorModeButton } from "@/components/ui/color-mode";
import SearchInput from "@/components/shared/SearchInput";
import { useLocation, useNavigate } from "react-router-dom";

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

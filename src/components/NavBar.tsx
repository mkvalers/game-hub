import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchInput: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack>
      <Image src={logo} />
      <SearchInput onSearch={onSearch} />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;

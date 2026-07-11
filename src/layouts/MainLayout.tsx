import Aside from "@/components/Aside";
import GameGrid from "@/components/GameGrid";
import NavBar from "@/components/NavBar";
import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import PlatformSelector from "@/components/PlatformSelector";
import GameHeading from "@/components/GameHeading";
import GenreSelector from "@/components/GenreSelector";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SortSelector from "@/components/SortSelector";

const MainLayout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
    >
      <GridItem area="nav" mb={2}>
        <NavBar />
      </GridItem>
      <GridItem
        paddingRight={5}
        area="aside"
        display={{ base: "none", lg: "block" }}
      >
        <Aside />
      </GridItem>
      <GridItem area="main">
        <GameHeading />
        <HStack
          mb={4}
          justifyContent={{
            base: "space-between",
            sm: "flex-start",
            md: "flex-start",
            lg: "flex-start",
          }}
          gap={2}
          flexWrap="wrap"
        >
          <Box flex={{ base: "1", md: "initial" }} minWidth={0}>
            <PlatformSelector />
          </Box>
          <Box flex={{ base: "1", md: "initial" }} minWidth={0}>
            <GenreSelector />
          </Box>
          <Box flexBasis={{ base: "100%", md: "auto" }}>
            <SortSelector />
          </Box>
        </HStack>
        <GameGrid />
        <ScrollToTopButton />
      </GridItem>
    </Grid>
  );
};

export default MainLayout;

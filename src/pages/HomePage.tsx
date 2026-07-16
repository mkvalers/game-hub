import Aside from "@/components/Aside";
import GameGrid from "@/components/GameGrid";
import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import PlatformSelector from "@/components/PlatformSelector";
import GameHeading from "@/components/GameHeading";
import GenreSelector from "@/components/GenreSelector";
import ReturnToTopButton from "@/components/ReturnToTopButton";
import SortSelector from "@/components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
    >
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
          }}
          gap={2}
          flexWrap="wrap"
          px={2}
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
        <ReturnToTopButton />
      </GridItem>
    </Grid>
  );
};

export default HomePage;

import Aside from "@/components/Aside";
import GameGrid from "@/components/GameGrid";
import NavBar from "@/components/NavBar";
import { Text, Grid, GridItem } from "@chakra-ui/react";
import type { Genre } from "@/hooks/useGenres";
import { useState } from "react";
import { Platform } from "@/hooks/usePlatforms";
import PlatformList from "@/components/PlatformList";
const MainLayout = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  );

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
      <GridItem area="nav" p={2}>
        <NavBar />
      </GridItem>
      <GridItem
        paddingX={5}
        area="aside"
        display={{ base: "none", lg: "block" }}
      >
        <Aside
          selectedGenre={selectedGenre}
          onSelectedGenre={setSelectedGenre}
        />
      </GridItem>
      <GridItem area="main" p="10px">
        <PlatformList
          selectedPlatform={selectedPlatform}
          onSelectPlatform={setSelectedPlatform}
        />
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
};

export default MainLayout;

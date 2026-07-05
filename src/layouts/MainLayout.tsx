import Aside from "@/components/Aside";
import GameGrid from "@/components/GameGrid";
import NavBar from "@/components/NavBar";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import type { Genre } from "@/hooks/useGenres";
import { useState } from "react";
import { Platform } from "@/hooks/usePlatforms";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector, { SortOrder } from "@/components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: SortOrder | null;
}

const MainLayout = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          selectedGenre={gameQuery.genre}
          onSelectedGenre={(genre) =>
            setGameQuery({ ...gameQuery, genre: genre })
          }
        />
      </GridItem>
      <GridItem area="main" p="10px">
        <HStack gap={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform: platform })
            }
          />
          <SortSelector
            selectedSort={gameQuery.sortOrder}
            onSelectSort={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder: sortOrder })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default MainLayout;

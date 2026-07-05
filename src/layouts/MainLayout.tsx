import Aside from "@/components/Aside";
import GameGrid from "@/components/GameGrid";
import NavBar from "@/components/NavBar";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import type { Genre } from "@/hooks/useGenres";
import { useState } from "react";
import { Platform } from "@/hooks/usePlatforms";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector, { SortOrder } from "@/components/SortSelector";
import GameHeading from "@/components/GameHeading";
import GenreSelector from "@/components/GenreSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: SortOrder | null;
  searchInput: string;
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
      <GridItem area="nav" mb={2}>
        <NavBar
          onSearch={(searchText) =>
            setGameQuery({ ...gameQuery, searchInput: searchText })
          }
        />
      </GridItem>
      <GridItem
        paddingRight={5}
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
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <HStack
          justifyContent={{
            base: "space-between",
            md: "flex-start",
            lg: "flex-start",
          }}
          gap={5}
        >
          <GenreSelector
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre: genre })
            }
          />
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

import Aside from "@/components/Aside";
import GameGrid from "@/components/GameGrid";
import NavBar from "@/components/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";
import type { Genre } from "@/hooks/useGenres";
import { useState } from "react";
const MainLayout = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
        <Aside onSelectedGenre={setSelectedGenre} />
      </GridItem>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default MainLayout;

import NavBar from "@/components/NavBar";
import useGames from "@/hooks/useGames";
import { Grid, GridItem, Box, Show } from "@chakra-ui/react";

const MainLayout = () => {
  const { games, error, isLoading, setGames, setError } = useGames();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" p={2}>
        <NavBar />
      </GridItem>
      <GridItem
        area="aside"
        bg={"green"}
        display={{ base: "none", lg: "block" }}
      >
        Aside
      </GridItem>
      <GridItem area="main" bg={"pink"}>
        <ul>
          {games?.results.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      </GridItem>
    </Grid>
  );
};

export default MainLayout;

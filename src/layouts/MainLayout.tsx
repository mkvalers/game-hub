import { Grid, GridItem, Box, Show } from "@chakra-ui/react";

const MainLayout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      h="100vh"
    >
      <GridItem area="nav" bg={"blue"}>
        Nav
      </GridItem>
      <GridItem
        area="aside"
        bg={"green"}
        display={{ base: "none", lg: "block" }}
      >
        Aside
      </GridItem>
      <GridItem area="main" bg={"pink"}>
        Main
      </GridItem>
    </Grid>
  );
};

export default MainLayout;

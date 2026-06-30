import NavBar from "@/components/NavBar";
import { Grid, GridItem, Box, Show } from "@chakra-ui/react";

const MainLayout = () => {
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
        Main
      </GridItem>
    </Grid>
  );
};

export default MainLayout;

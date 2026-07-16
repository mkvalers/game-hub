import NavBar from "@/components/NavBar";
import { Box } from "@chakra-ui/react";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar position="sticky" top={0} zIndex={10} />
      <Box>
        <Outlet />
      </Box>
      <ScrollRestoration />
    </>
  );
};

export default Layout;

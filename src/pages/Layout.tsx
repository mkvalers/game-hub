import NavBar from "@/components/NavBar";
import { Box } from "@chakra-ui/react";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box>
        <Outlet />
      </Box>
      <ScrollRestoration />
    </>
  );
};

export default Layout;

import NavBar from "@/components/layout/NavBar";
import { Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  if (error) throw error;

  return (
    <>
      <NavBar />
      <Text>
        {isRouteErrorResponse(error)
          ? "This page does not exist"
          : "Sorry, an unexpected error occured."}
      </Text>
    </>
  );
};

export default ErrorPage;

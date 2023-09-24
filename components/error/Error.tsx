import React from "react";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

type ErrorProps = {
  message: string;
};

const Error = (error: ErrorProps) => (
  <Alert
    status="error"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    height="full"
  >
    <AlertIcon boxSize="40px" mr={0} />
    <AlertTitle>{error.message}</AlertTitle>
  </Alert>
);

export default Error;

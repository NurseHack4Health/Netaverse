import { Box, Grid, VStack, Text } from "@chakra-ui/layout";
import * as React from "react";

export const HomePage = () => {
  return <>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <h1>Welcome to Netaverse</h1>
          <Text>
            Nurse-driven education
          </Text>
        </VStack>
      </Grid>
    </Box>
</>
};
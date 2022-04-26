import { Flex, Grid, Heading } from "@chakra-ui/react";
import { City } from "./City";

export function Cities() {
  return (
    <Flex
      w="100%" 
      px="20"
      pb="9"
      direction="column"
    >
      <Heading
        fontSize="36"
        fontWeight="medium"
        color="gray.500"
      >
        Cidades +100
      </Heading>

     <Grid
      templateColumns="repeat(4, 1fr)"
      gap="12"
      py="10"
     >
      <City />
      <City />
      <City />
      <City />
      <City />
     </Grid>
    </Flex>
  );
}
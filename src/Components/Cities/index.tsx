import { Flex, Grid, Heading } from "@chakra-ui/react";
import { City } from "./City";

export function Cities() {
  return (
    <>
      <Heading
        fontSize="36"
        fontWeight="medium"
        color="gray.500"
      >
        Cidades +100
      </Heading>

     <Grid
      templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
      alignItems="center"
      justifyContent="center"
      gap="12"
      py="10"
      px={["30px", "0"]}
     >
      <City />
      <City />
      <City />
      <City />
      <City />
     </Grid>
    </>
  );
}
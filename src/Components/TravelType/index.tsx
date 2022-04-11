import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { Type } from "./Type";

export function TravelTypes() {
  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      w="100%"
      justifyContent="space-between"
      alignContent="center"
      mt="32"
      mx="auto"
      maxWidth="1160px"
      gap={5}
    >
      <GridItem>
        <Type 
          icon="/icons/cocktail.svg"
          text="vida noturna"
        />
      </GridItem>

      <GridItem>
        <Type 
          icon="/icons/surf.svg"
          text="praia"
        />
      </GridItem>

      <GridItem>
        <Type 
          icon="/icons/building.svg"
          text="moderno"
        />
      </GridItem>

      <GridItem>
        <Type 
          icon="/icons/museum.svg"
          text="clássico"
        />
      </GridItem>

      <GridItem>
        <Type 
          icon="/icons/earth.svg"
          text="e mais ..."
        />
      </GridItem>
    </Grid>
  );
}
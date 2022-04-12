import { Grid } from "@chakra-ui/react";
import { Bio } from "./Bio";
import { InfoText } from "./InfoText";

export function Info() {
  return (
    <Grid
      flexDirection="row"
      templateColumns="repeat(2,1fr)"
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      px="20"
      py="36"
      gap={2}
    >
      <Bio />
      <InfoText />
    </Grid>
  );
}
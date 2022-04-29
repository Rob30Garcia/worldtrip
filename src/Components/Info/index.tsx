import { Grid } from "@chakra-ui/react";
import { Bio } from "./Bio";
import { InfoText } from "./InfoText";

export function Info() {
  return (
    <Grid
      flexDirection="row"
      templateColumns={["1fr", "1fr 1fr", "1.2fr 1fr"]}
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      my={["8", "20"]}
      gap={[5, 10, 16, 20]}
    >
      <Bio />
      <InfoText />
    </Grid>
  );
}
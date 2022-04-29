import { Flex } from "@chakra-ui/react";
import { BannerContinent } from "../../Components/BannerContinent";
import { Cities } from "../../Components/Cities";
import { Header } from "../../Components/Header";
import { Info } from "../../Components/Info";

export default function Continents() {
  return (
    <Flex
      direction="column"
      w="100%"
      h="100vh"
    >
      <Header />

      <BannerContinent />

      <Flex
        direction="column"
        maxWidth="1160px"
        mx='auto'
        mb="10"
        px="1rem"
        align="center"
        justify="center"
      >
        <Info />
        <Cities />
      </Flex>
    </Flex>
  );
}

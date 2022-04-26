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
        mx='auto'
        px='1rem'
        maxWidth="1440px"
        align="center"
        justify="center"
      >
        <Info />

        <Cities />
      </Flex>
    </Flex>
  );
}

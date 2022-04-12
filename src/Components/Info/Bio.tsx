import { Flex, Text } from "@chakra-ui/react";

export function Bio() {
  return (
    <Flex
      minWidth={600}
      align="center"
      textAlign="justify"
    >
      <Text
        fontSize="24"
        color="gray.500"
      >
        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
    </Flex>
  );
}

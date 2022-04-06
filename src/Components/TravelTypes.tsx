import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <Flex
      mt="20"
      mx="auto"
      maxWidth={1180}
      width="100%"
      justifyContent="space-between"
      align="center"
    >
      <Center
        flexDirection="column"
      >
        <Image 
          src="/icons/cocktail.svg"
          alt="cocktail"
          boxSize='85px'
        />
        <Text
          fontSize={24}
          fontWeight="semibold"
          color="gray.500"
          mt="6"
        >Vida noturna</Text>
      </Center>

      <Center
        flexDirection="column"
      >
        <Image 
          src="/icons/surf.svg"
          alt="surf"
          boxSize='85px'
        />

        <Text
          fontSize={24}
          fontWeight="semibold"
          color="gray.500"
          mt="6"
        >Praia</Text>
      </Center>

      <Center
        flexDirection="column"
      >
        <Image 
          src="/icons/building.svg"
          alt="building"
          boxSize='85px'
        />

        <Text
          fontSize={24}
          fontWeight="semibold"
          color="gray.500"
          mt="6"
        >Moderno</Text>
      </Center>

      <Center
        flexDirection="column"
      >
        <Image 
          src="/icons/museum.svg"
          alt="museum"
          boxSize='85px'
        />

        <Text
          fontSize={24}
          fontWeight="semibold"
          color="gray.500"
          mt="6"
        >Clássico</Text>
      </Center>

      <Center
        flexDirection="column"
      >
        <Image 
          src="/icons/earth.svg"
          alt="earth"
          boxSize='85px'
        />

        <Text
          fontSize={24}
          fontWeight="semibold"
          color="gray.500"
          mt="6"
        >e mais...</Text>
      </Center>

    </Flex>
  );
}
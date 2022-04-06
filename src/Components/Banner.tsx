import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      w="100%"
      mx="auto"
      direction="column"
    >
      <Image 
        src="/images/Background.png" 
        alt="background"
        width="100%"
        maxHeight={350}
        position="relative"
      />

      <Image 
        src="/images/Airplane.svg"
        alt="airplane"
        zIndex={1}
        maxHeight="72"
        width="lg"
        alignSelf="flex-end"
        position="absolute"
        mt="20"
        mr="36"
      />

      <Box
        position="absolute"
        boxSize="xl"
        mt="20"
        ml="36"
      >
        <Text
          fontSize={36}
          fontWeight="medium"
          color="gray.10"
        >
          5 Continentes, <br/>infinitas possibilidades.
        </Text>    

        <Text
          fontSize={20}
          color="gray.50"
          mt="5"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou
        </Text>    
      </Box>
    </Flex>
  );
}
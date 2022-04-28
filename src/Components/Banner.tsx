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
        height={["164px", "250px", "250px", "350px"]}
        position="relative"
      />

      <Image 
        src="/images/Airplane.svg"
        alt="airplane"
        zIndex={1}
        width={["300px", "300px", "300px", "430px"]}
        minHeight="163px"
        display={["none", "none", "block"]}
        alignSelf="flex-end"
        position="absolute"
        mt="24"
        mr="36"
      />

      <Box
        position="absolute"
        boxSize={["lg", "xl"]}
        mx={["4", "10", "15", "20", "36"]}
        my={["7", "10", "15", "20", "20"]}
      >
        <Text
          fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}
          fontWeight="medium"
          color="gray.10"
        >
          5 Continentes, <br /> infinitas possibilidades.
        </Text>    

        <Text
          fontSize={["0.8rem", "xl"]}
          color="gray.50"
          maxWidth={["330px", "375px", "100%", "550px"]}
          mt="5"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou
        </Text>    
      </Box>
    </Flex>
  );
}
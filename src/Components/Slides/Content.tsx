import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";

interface ContentProps {
  continent: {
    img: string;
    name: string;
    phrase: string;
  }
}

export function Content({ continent }: ContentProps) {
  return (
   <Flex
    width="100%"
    height="100%"
   >
     <Image 
        height='100%'
        width='100%'
        src={continent.img}
        alt={continent.name}
        objectFit='cover'
        position='relative'
      />

      <Center
        position='absolute'
        width='100%'
        height='100%'
        flexDirection="column"
      >
        <Text
          fontSize={48}
          fontWeight='bold'
          color='gray.10'
        >
          {continent.name}
        </Text>

        <Text
          fontSize={24}
          fontWeight='bold'
          color='gray.50'
        >
          {continent.phrase}
        </Text>
      </Center>

      
   </Flex>
  );
}
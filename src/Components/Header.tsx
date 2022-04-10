import { Flex, SimpleGrid, Image } from "@chakra-ui/react";

import Logo from '../../public/images/Logo.svg';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      mx='auto'
      px='1rem'
      minHeight={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <SimpleGrid
        h="100%"
        mx="auto"
        w="100%"
        maxWidth="1160px"
        alignItems="center"
        templateColumns="repeat(3,fr)"
        justifyContent="center"
      >
        <Image 
          src="/images/Logo.svg" 
          alt="Logo"
          height={45}
        />
      </SimpleGrid>
    </Flex>
  );
}
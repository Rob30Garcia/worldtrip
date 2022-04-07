import { Flex, Image } from "@chakra-ui/react";

import Logo from '../../public/images/Logo.svg';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      minHeight="100px"
      align="center"
      justify="center"
    >
      <Image 
        src="/images/Logo.svg" 
        alt="Logo"
        height={45}
      />
    </Flex>
  );
}
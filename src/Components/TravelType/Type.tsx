import { Flex, Image, Text } from "@chakra-ui/react";

interface TypeProps {
  icon: string;
  text: string;
}

export function Type({ icon, text }: TypeProps) {
  return (
    <Flex
      direction="column"
      align="center"
      justifyContent="center"
    >
      <Image 
        src={icon}
        alt="cocktail"
        boxSize='85px'
      />

      <Text
        fontSize={24}
        fontWeight="semibold"
        color="gray.500"
        mt="6"
      >{text}</Text>
    </Flex>
  );
}

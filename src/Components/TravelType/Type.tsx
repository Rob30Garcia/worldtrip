import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TypeProps {
  icon: string;
  text: string;
}

export function Type({ icon, text }: TypeProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  })

  return (
    <Flex
      direction={["row", "column"]}
      align="center"
      justifyContent="center"
    >
      {
        isMobile ? (
          <Image 
            src={icon}
            alt="cocktail"
            boxSize='85px'
          />
        ) : (
          <Text
            color="yellow.100"
            fontSize="4xl"
            mr="2"
          >•</Text>
        )
      }

      <Text
        fontSize={["md", "xl", "2xl"]}
        fontWeight="semibold"
        color="gray.500"
        mt="6"
      >{text}</Text>
    </Flex>
  );
}

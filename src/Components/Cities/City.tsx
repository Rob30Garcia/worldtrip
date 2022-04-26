import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export function City() {
  return (
    <Flex
      width={256}
      height={280}
      bg="gray.0"
      borderRadius="4"
      borderWidth={1}
      borderColor="yellow.50"
      direction="column"
    >
      <Image
        borderTopRadius="4"
        width="100%"
        height="170"
        src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Reino Unido"
      />

      <Flex
        width="100%"
        height="100%"
        align="center"
        justifyContent="space-between"
        p="6"
      >
        <Stack
          spacing="3"
        >
          <Text
            fontSize="1.25rem"
            fontWeight="semibold"
            color="gray.500"
          >
            Londres
          </Text>
          <Text
            fontSize="1rem"
            fontWeight="medium"
            color="gray.300"
          >
            Reino Unido
          </Text>
        </Stack>

        <Image
          boxSize="30px"
          borderRadius="full"
          src="https://miro.medium.com/max/1400/1*Cq55pULfLn558iZiZea9Og.png"
          alt="Bandeira do reino unido"
        />
      </Flex>

    </Flex>
  );
}
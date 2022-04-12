import { Flex, Heading, Image } from "@chakra-ui/react";

export function BannerContinent() {
  return (
    <Flex>
      <Flex
        width="100%"
        height="500px"
        px="36"
        pt="72"
        bgImg="https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        bgSize="cover"
        align="center"
      >
        <Heading
          textAlign="center"
          fontSize="3xl"
          color="gray.10"
          fontWeight="semibold"
          zIndex="1"
        >
          Europa
        </Heading>
      </Flex>

      <Flex 
        width="100%"
        height="500px"
        backgroundColor="rgb(28, 20, 1, 0.3)"
        position="absolute"
      />
    </Flex>
  );
}
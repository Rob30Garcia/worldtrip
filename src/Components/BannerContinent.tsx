import { Flex, Heading, Image } from "@chakra-ui/react";

export function BannerContinent() {
  return (
    <Flex>
      <Flex
        width="100%"
        height={["150px", "300px", "500px"]}
        bgImg="https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        align="center"
        justify={["center", "center", "flex-start"]}
        px={["0", "0", "36"]}
        pt={["0", "0", "72"]}
      >
          <Heading
            textAlign={["center", "left"]}
            fontSize={["1.75rem", "5xl"]}
            color="gray.10"
            fontWeight="semibold"
            zIndex="1"
          >
            Europa
          </Heading>
      </Flex>

      <Flex 
        width="100%"
        height={["150px", "300px", "500px"]}
        backgroundColor="rgb(28, 20, 1, 0.3)"
        position="absolute"
      />
    </Flex>
  );
}
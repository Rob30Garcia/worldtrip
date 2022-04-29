import { Center, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

interface ContentProps {
  continent: {
    img: string;
    name: string;
    phrase: string;
  }
}

export function Content({ continent }: ContentProps) {
  return (
    <Link
      href={`continents/${continent.name}`}
    >
      <a>
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
              fontSize={["3xl", "4xl", "5xl"]}
              fontWeight='bold'
              color='gray.10'
            >
              {continent.name}
            </Text>

            <Text
              fontSize={["0.8rem", "1xl", "2xl"]}
              fontWeight='bold'
              color='gray.50'
            >
              {continent.phrase}
            </Text>
          </Center>
        </Flex>
      </a>
    </Link>
  );
}
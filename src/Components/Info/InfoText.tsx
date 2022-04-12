import { Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle} from 'react-icons/ai';

export function InfoText() {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={3}
    >
      <Flex
        direction="column"
        align="center"
        justifyContent="center"
      >
        <Heading
          fontSize="48"
          color="yellow.100"
        >
          50
        </Heading>
        <Text
          fontSize="24"
          color="gray.500"
          fontWeight="semibold"
        >
          países
        </Text>
      </Flex>

      <Flex
        direction="column"
        align="center"
        justifyContent="center"
      >
        <Heading
          fontSize="48"
          color="yellow.100"
        >
          60
        </Heading>
        <Text
          fontSize="24"
          color="gray.500"
          fontWeight="semibold"
        >
          línguas
        </Text>
      </Flex>

      <Flex>
        <Flex
          direction="column"
          align="center"
          justifyContent="center"
        >
          <Heading
            fontSize="48"
            color="yellow.100"
          >
            27
          </Heading>
          <Text
            fontSize="24"
            color="gray.500"
            fontWeight="semibold"
          >
            cidades +100
          </Text>
        </Flex>

        <Icon
          ml="1.5"
          as={AiOutlineInfoCircle}
          size="16"
          color="gray.100"
          alignSelf="flex-end"
          mb="2.5"
        />
      </Flex>

    </Grid>
  );
}
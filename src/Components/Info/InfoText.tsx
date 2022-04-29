import { Flex, Grid, Heading, Icon, Text, Tooltip } from "@chakra-ui/react";
import { AiOutlineInfoCircle} from 'react-icons/ai';

export function InfoText() {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={3}
      mt={["4", "0"]}
    >
      <Flex
        direction="column"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.100"
        >
          50
        </Heading>
        <Text
          fontSize={["md", "xl"]}
          color="gray.500"
          fontWeight="600"
        >
          países
        </Text>
      </Flex>

      <Flex
        direction="column"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.100"
        >
          60
        </Heading>
        <Text
          fontSize={["md", "xl"]}
          color="gray.500"
          fontWeight="600"
        >
          línguas
        </Text>
      </Flex>

      <Flex>
        <Flex
          direction="column"
          align={["flex-start", "flex-start", "center"]}
        >
          <Heading
            fontSize={["2xl", "5xl"]}
            color="yellow.100"
          >
            27
          </Heading>
          <Text
            fontSize={["md", "xl"]}
            color="gray.500"
            fontWeight="600"
          >
            cidades +100
          </Text>
        </Flex>
        <Tooltip
          label='Mais informação'
          bg='gray.300' 
          color='black'
        >
          <Icon
            ml="1.5"
            as={AiOutlineInfoCircle}
            size="16"
            color="gray.100"
            alignSelf="flex-end"
            mb="2.5"
          />
        </Tooltip>
      </Flex>

    </Grid>
  );
}
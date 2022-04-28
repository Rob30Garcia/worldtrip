import { Text, Center, Divider, Flex, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Banner } from '../Components/Banner'
import { Header } from '../Components/Header'
import { Slides } from '../Components/Slides'
import { TravelTypes } from '../Components/TravelType'

const Home: NextPage = () => {
  return (
    <Flex
      direction="column"
      w="100%"
      h="100vh"
    >      
      <Header />
      <Banner />
      <TravelTypes />

      <Center
        width='100%'
      >
        <Divider 
          mt="20"
          width='90px'
          borderBottom="2px"
          borderColor="gray.500"
        />
      </Center>

      <Center
        width='100%'
        flexDirection='column'
        mt='14'
      >
        <Heading
          textAlign="center"
          fontWeight="500"
          mb={["5", "14"]}
          fontSize={["lg", "3xl", "4xl"]}
        >
          Vamos nessa? <br />Então escolha seu continente
        </Heading>
      </Center>

      <Slides />

    </Flex>
  )
}

export default Home;

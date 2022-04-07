import { Text, Center, Divider, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Banner } from '../Components/Banner'
import { Header } from '../Components/Header'
import { TravelTypes } from '../Components/TravelTypes'

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
        <Text
          fontSize={36}
          fontWeight="medium"
          color="gray.500"
        >
          Vamos nessa?
        </Text>  
        <Text
          fontSize={36}
          fontWeight="medium"
          color="gray.500"
        >
          Então escolha seu continente
        </Text>
      </Center>
    </Flex>
  )
}

export default Home;

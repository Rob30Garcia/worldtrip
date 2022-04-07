import { Box, Center, Divider, Flex } from '@chakra-ui/react'
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
    </Flex>
  )
}

export default Home;

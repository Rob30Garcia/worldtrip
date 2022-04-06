import { Flex } from '@chakra-ui/react'
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
      m='0'
      p='0'
    >      
      <Header />
      <Banner />
      <TravelTypes />
    </Flex>
  )
}

export default Home;

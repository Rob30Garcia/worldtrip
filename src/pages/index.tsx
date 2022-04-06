import { Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Banner } from '../Components/Banner'
import { Header } from '../Components/Header'

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

      <Flex
        w="100%"
      >
        <Banner />

      </Flex>
    </Flex>
  )
}

export default Home;

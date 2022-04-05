import { Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from '../Components/Header'

const Home: NextPage = () => {
  return (
    <Flex
      direction="column"
      h="100vh"
    >
      <Header />
    </Flex>
  )
}

export default Home;

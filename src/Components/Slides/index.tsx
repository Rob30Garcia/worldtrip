import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image, Flex, Text, Box, Center } from '@chakra-ui/react';

import { Content } from './Content';

const continents = [
  {
    name: 'América do Norte',
    img: 'https://images.unsplash.com/photo-1543372654-b45dd90eeee5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    phrase: 'A américa desenvolvida'
  },
  {
    name: 'América do Sul',
    img: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1226&q=80',
    phrase: 'O continente dos países tropicais'
  },
  {
    name: 'Ásia',
    img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXNpYW4lMjBjaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    phrase: 'A civilização mais antiga'
  },
  {
    name: 'África',
    img: 'https://images.unsplash.com/photo-1602685234860-3d38ee425ae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    phrase: 'Berço da humanidade'
  },
  {
    name: 'Europa',
    img: 'https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80',
    phrase: 'O continente mais antigo'
  },
  {
    name: 'Oceania',
    img: 'https://images.unsplash.com/photo-1484007880226-8849602bb447?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1501&q=80',
    phrase: 'O Novíssimo continente'
  }
]

export function Slides() {
  return (
    <Flex
      width="100%"
      px='10'
      py='24'
    >
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination
      >
        {
          continents.map((continent) => (
            <SwiperSlide
              key={continent.name}
              style={{
                height: 450,
                width: '100%',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Content continent={continent}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </Flex>
  );
}
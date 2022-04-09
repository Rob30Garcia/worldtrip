import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image, Flex, Text, Box, Center } from '@chakra-ui/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Content } from './Content';

const continents = [
  {
    name: 'América do Norte',
    img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1544&q=80',
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
    img: 'https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1623&q=80',
    phrase: 'O continente mais antigo'
  },
  {
    name: 'Oceania',
    img: 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2NlYW5pYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
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
import React from 'react';

import { Center, Container, Text } from '@chakra-ui/react';
import { Keyboard, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    imageSrc:
      'https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'Europa',
    subtitle: 'O continente mais antigo.',
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1589871090211-7f2efeec05b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'América do Norte',
    subtitle: 'O continente mais capitalista.',
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    title: 'América do Sul',
    subtitle: 'O continente mais alegre.',
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'Ásia',
    subtitle: 'O maior continente do mundo.',
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
    title: 'África',
    subtitle: 'Onde tem as culturas mais interessantes.',
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'Oceania',
    subtitle: 'O continente mais curioso.',
  },
];

export default function Carousel() {
  return (
    <Swiper
      navigation
      centeredSlides
      pagination={{
        dynamicBullets: false,
        clickable: true,
      }}
      keyboard={{ enabled: true, pageUpDown: false }}
      modules={[Navigation, Pagination, Keyboard]}>
      {slides.map(({ imageSrc, title, subtitle }) => (
        <SwiperSlide key={title}>
          <Container
            h="100%"
            maxW="100%"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) ,url('${imageSrc}')`}>
            <Center h="100%" flexDirection="column">
              <Text variant="bold" size="xl" color="light.heading">
                {title}
              </Text>
              <Text variant="bold" color="light.heading">
                {subtitle}
              </Text>
            </Center>
          </Container>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

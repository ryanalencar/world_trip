import { Center, Container, Divider, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import TravelTypes from '../components/TravelTypes';

const Home: NextPage = () => (
  <>
    <Header />
    <Banner />
    <TravelTypes />
    <Center w="100%" my={20}>
      <Divider
        w="90px"
        orientation="horizontal"
        borderRadius={5}
        borderWidth={2}
        borderColor="dark.heading"
      />
    </Center>
    <Center textAlign="center" my={20}>
      <Text variant="medium" size="lg" color="dark.heading">
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>
    </Center>

    <Container maxW="container.lg" h="450px" mb={10} centerContent>
      <Carousel />
    </Container>
  </>
);

export default Home;

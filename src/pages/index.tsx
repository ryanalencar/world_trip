import { Center, Divider } from '@chakra-ui/react';
import type { NextPage } from 'next';

import Banner from '../components/Banner';
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
  </>
);

export default Home;

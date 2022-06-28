import { Center } from '@chakra-ui/react';
import Image from 'next/image';

export default function Header() {
  return (
    <Center as="header" height="100px">
      <Image
        src="/world_trip_logo.svg"
        alt="Worldtrip Logo"
        width={184}
        height={46}
      />
    </Center>
  );
}

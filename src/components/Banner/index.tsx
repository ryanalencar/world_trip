import { Box, Container, Flex, Image, Text, VStack } from '@chakra-ui/react';

export default function Banner() {
  return (
    <Container
      bgImage="url('/images/banner_home.jpg')"
      bgRepeat="no-repeat"
      bgSize="contain"
      w="100%"
      maxW="100%"
      h="368px">
      <Flex
        as="section"
        align="center"
        justify="space-between"
        h="100%"
        mx={20}>
        <VStack spacing={2} align="flex-start" justify="center" mb={10}>
          <Text as="h1" color="light.heading" size="lg" variant="medium">
            5 Continentes,
            <br />
            infinitas possibilidades.
          </Text>
          <Text color="light.info" size="sm" variant="regular">
            Chegou a hora de tirar do papel a viagem que você
            <br />
            sempre sonhou.
          </Text>
        </VStack>
        <Box mt={20}>
          <Image
            src="/images/airplane.svg"
            alt="Yellow Airplane"
            transform="rotate(3deg)"
          />
        </Box>
      </Flex>
    </Container>
  );
}

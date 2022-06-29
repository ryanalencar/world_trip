import { Image, Text, VStack } from '@chakra-ui/react';

interface ITravelTypesItem {
  icon: string;
  altIcon: string;
  title: string;
}

export default function TravelTypesItem({
  icon,
  altIcon,
  title,
}: ITravelTypesItem) {
  return (
    <VStack justify="center" align="center" spacing={5}>
      <Image src={icon} alt={altIcon} />
      <Text variant="semibold" color="dark.heading">
        {title}
      </Text>
    </VStack>
  );
}

import { Image, Text, VStack } from '@chakra-ui/react';

export interface ITravelTypesItem {
  iconPath: string;
  altIcon: string;
  title: string;
}

export default function TravelTypesItem({
  iconPath,
  altIcon,
  title,
}: ITravelTypesItem) {
  return (
    <VStack justify="center" align="center" spacing={5}>
      <Image w={85} h={85} src={iconPath} alt={altIcon} />
      <Text variant="semibold" color="dark.heading">
        {title}
      </Text>
    </VStack>
  );
}

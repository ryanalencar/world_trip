import { Center, HStack } from '@chakra-ui/react';

import TravelTypesItem, { ITravelTypesItem } from './TravelTypesItem';

const travelTypes: ITravelTypesItem[] = [
  {
    iconPath: '/icons/cocktail.svg',
    altIcon: 'Cocktail',
    title: 'vida noturna',
  },
  {
    iconPath: '/icons/surf.svg',
    altIcon: 'Praia',
    title: 'praia',
  },
  {
    iconPath: '/icons/building.svg',
    altIcon: 'Prédio',
    title: 'moderno',
  },
  {
    iconPath: '/icons/museum.svg',
    altIcon: 'Museu',
    title: 'clássico',
  },
  {
    iconPath: '/icons/earth.svg',
    altIcon: 'Planeta Terra',
    title: 'e mais...',
  },
];

export default function TravelTypes() {
  return (
    <Center my={20}>
      <HStack spacing="40">
        {travelTypes.map(({ altIcon, iconPath, title }) => (
          <TravelTypesItem
            key={altIcon}
            title={title}
            altIcon={altIcon}
            iconPath={iconPath}
          />
        ))}
      </HStack>
    </Center>
  );
}

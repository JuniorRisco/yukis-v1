import { useState } from 'react';
import { Input, ScrollView, Separator, Text, XStack, YStack } from 'tamagui';

interface Props {
  path: string;
  title: string;
}

const dummyData = [
  'React Native',
  'Expo',
  'JavaScript',
  'TypeScript',
  'Firebase',
  'Vue',
  'Laravel',
  'Swift',
  'Bootstrap',
  'MySQL',
];

export const ScreenContent = ({ path, title }: Props) => {
  const [query, setQuery] = useState('');

  const filteredData = dummyData.filter((item) => item.toLowerCase().includes(query.toLowerCase()));

  return (
    <YStack
      f={1}
      px="$4"
      py="$6"
      space
      bg="rgba(255,255,255,0.85)" // Fondo blanco semitransparente
    >
      <Text fontSize="$8" fontWeight="600" textAlign="center">
        {title}
      </Text>

      <Input
        placeholder="Buscar..."
        value={query}
        onChangeText={setQuery}
        borderColor="$gray8"
        borderWidth={1}
        borderRadius="$4"
        px="$3"
        py="$2"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <YStack space="$2" mt="$3">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <XStack
                key={index}
                p="$3"
                bg="$gray2"
                borderRadius="$3"
                alignItems="center"
                justifyContent="space-between">
                <Text fontSize="$5">{item}</Text>
              </XStack>
            ))
          ) : (
            <Text color="$gray8" textAlign="center" mt="$4">
              No se encontraron resultados.
            </Text>
          )}
        </YStack>
      </ScrollView>

      <Separator my="$4" />
      <Text fontSize="$2" textAlign="center" color="$gray8">
        Ruta: {path}
      </Text>
    </YStack>
  );
};

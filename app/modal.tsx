import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import { ScreenContent } from '~/components/Search'; // ya está bien

export default function Modal() {
  return (
    <>
      <ScreenContent path="app/modal.tsx" title="Buscador" />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}

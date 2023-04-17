import { StatusBar } from 'expo-status-bar';
import StackNavigation from './src/navigation/StackNavigation';
import { ModalPortal } from 'react-native-modals';

export default function App() {
  return (
    <>
    <StackNavigation />
    <ModalPortal />
    </>
  );
}



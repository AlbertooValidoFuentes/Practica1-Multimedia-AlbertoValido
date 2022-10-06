import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Description from './components/Description'
import Github from './components/GitHub';

export default function App() {
  return (
    <View>
      <Header />
      <Description/>
      <StatusBar style="auto" />
    </View>
  );
}
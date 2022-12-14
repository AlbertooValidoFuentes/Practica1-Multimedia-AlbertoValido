import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Description from './components/Description'
import GitHub from './components/GitHub';

export default function App() {
  return (
    <View>
      <Header />
      <Description/>
      <GitHub />
      <StatusBar style="auto" />
    </View>
  );
}
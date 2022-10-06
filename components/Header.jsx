import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
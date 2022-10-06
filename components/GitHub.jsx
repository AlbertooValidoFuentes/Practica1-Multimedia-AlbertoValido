import { StyleSheet, Text, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function GitHub() {
    return (
        <View style={styles.container}>
            <QRCode value={'https://github.com/AlbertooValidoFuentes/Practica1-Multimedia-AlbertoValido.git'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 100,
    }
})
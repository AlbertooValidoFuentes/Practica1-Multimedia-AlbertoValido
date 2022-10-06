import { StyleSheet, Text, View} from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text>
                Mi nombre es Alberto Valido Fuentes, actualmente
                estoy estudiando el grado superior de Desarrollo De
                Aplicaciones Multiplataforma en los Salesianos la Cuesta.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 100,
    }
})
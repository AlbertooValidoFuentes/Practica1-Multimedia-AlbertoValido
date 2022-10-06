import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.direction}>
                <View>
                <Image
                    source={require("../assets/avatar.png")}
                    style={styles.img}
                />
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>Alberto Valido Fuentes</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        height: 200,
        justifyContent: 'center',
    },
    direction: {
        flexDirection: 'row'
    },
    img: {
        width: 80,
        height: 80,
        marginLeft: 20
    },
    nameContainer: {
        marginLeft: 20,
        justifyContent: 'center'
    },
    name: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    }
})
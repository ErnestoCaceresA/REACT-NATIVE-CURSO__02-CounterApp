import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
//components
import { Fab } from '../components/Fab';


export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador: {contador}</Text>

            <Fab
                title="+1"
                onPress={() => setContador(contador + 1)}
            />

            <Fab
                title="-1"
                onPress={() => setContador(contador - 1)}
                position='bl'
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center'
    },
    title: {
        alignSelf: 'center',
        fontSize: 40,
        position: 'relative',
        top: -15
    },

})
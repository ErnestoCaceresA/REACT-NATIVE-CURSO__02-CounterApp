import React from 'react'
import { TouchableOpacity, TouchableNativeFeedback, View, Text, StyleSheet, Platform } from 'react-native';


interface Props {
    title: string,
    onPress: () => void, //tiene que ser una funcion que no regrese nada
    position?: 'br' | 'bl' //tiene que mandar ahuevo una de esas dos Y ES OPCIONAL SI LO MANDA O NO YA QUE TIENE EL "?"
}

export const Fab = ({ title, onPress, position = 'br' }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.8 }
                onPress={onPress}
                style={[ //multiples estilos
                    styles.fabLocation,
                    (position === 'bl' ? styles.left : styles.right)
                ]}>
                <View style={styles.fab}>
                    <Text style={styles.fabText}> {title} </Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View style={[ //multiples estilos
                styles.fabLocation,
                (position === 'bl' ? styles.left : styles.right)
            ]}>
                <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}>
                    <View style={styles.fab}>
                        <Text style={styles.fabText}> {title} </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }


    return Platform.OS === 'ios' ? ios() : android() //va a retornar la funcion de ios si la plataforma es ios y retornara la de android para los android
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },
    fabText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
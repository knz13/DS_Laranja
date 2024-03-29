import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Button = ({ labelButton, onpress }) => {
    return (   
        <TouchableOpacity style={styles.button}
            onPress={onpress}
        >
            <Text>{labelButton}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#cd5f00',
        width: 350,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    }
})
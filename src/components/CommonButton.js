import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function Button({titulo}){
return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.texto}>
                {titulo}
            </Text>
        </TouchableOpacity>
    )
};

export function Skill({ titulo, bg = 'white', border = "transparent", colorText = 'black', bold, fsize, onPress }) {
    return(
        <TouchableOpacity 
            onPress={() => onPress()}
            style={{...styles.container, marginRight: 10, marginTop: 15, borderColor: border, backgroundColor: bg}}>
            <Text style={{color: colorText, fontWeight: bold, fontSize: fsize}}>
                {titulo}
            </Text>
        </TouchableOpacity>
    )

};

const styles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderColor: '#c427cc',
        borderWidth: 1,
        borderRadius: 5,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 10,
        paddingRight: 10,       
    },

    texto: {
        color: '#c427cc',
        fontWeight: 'bold',
    }
});
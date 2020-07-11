import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

export default (props) => {

    return (<View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
    </View>);
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '10%',
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18
    }
});
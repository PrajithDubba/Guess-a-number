import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default (props) => {
    return <TextInput {...props} style={{ ...styles.input, ...props.style }} />
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
})
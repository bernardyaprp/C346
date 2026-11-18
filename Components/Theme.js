import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
    card: {
        marginBottom: 25,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
    },
    poster: {
        width: '100%',
        height: 450,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    questionText: {
        fontSize: 24,
        color: 'black',
        marginTop: 10,
        marginBottom: 10,
    },
    pickerContainer: {
        borderBottomWidth: 3,
        borderBottomColor: 'gray',
    },
});

const Movie = ({ poster, options, selectedValue, onValueChange }) => {
    return (
        <View style={styles.card}>
            <Image source={poster} style={styles.poster} />

            <Text style={styles.questionText}>
                What movie is this?
            </Text>

            {/* The dropdown picker module for each card section */}
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={onValueChange}
                    mode="dropdown"
                >
                    <Picker.Item label="Select an item..." value="" />
                    {options.map((opt) => (
                        <Picker.Item key={opt} label={opt} value={opt} />
                    ))}
                </Picker>
            </View>
        </View>
    );
};

export default Movie;

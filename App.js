import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Text, Alert } from 'react-native';
import Movie from "./Components/Theme";

export default function AllMovies() {
    const [answers, setAnswers] = useState({
        movie1: '',
        movie2: '',
        movie3: '',
    });

    const handleSubmit = () => {
        let correctCount = 0;

        if (answers.movie1 === 'Doctor Sleep') correctCount += 1;
        if (answers.movie2 === 'Midway') correctCount += 1;
        if (answers.movie3 === 'The Batman') correctCount += 1;

        Alert.alert('', `You have ${correctCount} correct answers!`, [{ text: 'OK' }]);
    };

    return (
            <ScrollView bounces={false}>

                {/* Card Entry 1 */}
                <Movie
                    title={'Doctor Sleep'}
                    year={2019}
                    poster={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_QooCw3gBQog4zc8e2YV4SCszaLG2jC7tVQmotc_8mw&s=10' }}
                    options={['Doctor Sleep', 'The Shining', 'It']}
                    selectedValue={answers.movie1}
                    onValueChange={(val) => setAnswers(prev => ({ ...prev, movie1: val }))}
                />

                {/* Card Entry 2 */}
                <Movie
                    title={'Midway'}
                    year={2020}
                    poster={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmHZ2eMiSxeQyr-IrtJklKmvKY9DPQE5iDXN7lpYVXlw&s=10' }}
                    options={['Dunkirk', 'Midway', '1917']}
                    selectedValue={answers.movie2}
                    onValueChange={(val) => setAnswers(prev => ({ ...prev, movie2: val }))}
                />

                {/* Card Entry 3 */}
                <Movie
                    title={'The Batman'}
                    year={2022}
                    poster={{ uri: 'https://cdn.europosters.eu/image/350/posters/the-batman-2022-i122573.jpg' }}
                    options={['Superman', 'The Batman', 'Spiderman']}
                    selectedValue={answers.movie3}
                    onValueChange={(val) => setAnswers(prev => ({ ...prev, movie3: val }))}
                />

                {/* Bottom Submission Action Trigger */}
                <TouchableOpacity
                    style={{
                        backgroundColor: '#2196F3',
                        paddingVertical: 16,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        marginTop: 10,
                        marginBottom: 30,
                    }}
                    onPress={handleSubmit}
                >
                    <Text /*style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 14, letterSpacing: 1 }}}*/>
                        SUBMIT ANSWERS
                    </Text>
                </TouchableOpacity>

            </ScrollView>
    );
}

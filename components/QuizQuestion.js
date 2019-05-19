import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { blue, gray, green, red, white } from "../utils/colors"

export const QuizQuestion = ({ questions, questionIndex, showAnswer, toggleAnswer, handleSubmit }) =>
    <View style={styles.container}>
        <Text style={styles.cardNumber}>
            {questionIndex + 1} / {questions.length}
        </Text>
        <Text style={styles.title}>
            {showAnswer ? 'Answer' : 'Question'}
        </Text>
        {
            showAnswer
                ? <Text style={styles.content}>{questions[questionIndex].answer}</Text>
                : <Text style={styles.content}>{questions[questionIndex].question}</Text>
        }
        <TouchableOpacity onPress={toggleAnswer}>
            <Text style={styles.showAnswerBtn}>
                {showAnswer ? 'View Question' : 'View Answer'}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSubmit('correct')}>
            <Text style={styles.correctBtn}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSubmit('incorrect')}>
            <Text style={styles.incorrectBtn}>In Correct</Text>
        </TouchableOpacity>
    </View>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: gray,
        margin: 10
    },
    cardNumber: {
        fontSize: 14,
        color: gray,
        margin: 10,
        textAlign: 'center'
    },
    content: {
        fontSize: 16,
        color: blue,
        textAlign: 'center',
        width: Dimensions.get('screen').width - 50
    },
    showAnswerBtn: {
        backgroundColor: white,
        color: gray,
        borderColor: gray,
        fontWeight: 'bold',
        padding: 20,
        borderWidth: 1,
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 10,
        width: Dimensions.get('screen').width - 50
    },
    correctBtn: {
        backgroundColor: green,
        color: white,
        borderColor: green,
        fontWeight: 'bold',
        padding: 20,
        borderWidth: 1,
        margin: 10,
        textAlign: 'center',
        width: Dimensions.get('screen').width - 50
    },
    incorrectBtn: {
        backgroundColor: red,
        color: white,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: blue,
        padding: 20,
        margin: 10,
        textAlign: 'center',
        width: Dimensions.get('screen').width - 50
    }
});
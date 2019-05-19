import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { blue, gray, green, red, white } from "../utils/colors"

export const QuizResult = ({ incorrect, correct, totalQuestions, navigation, handleRestartQuiz }) =>
    <View style={styles.container}>
        <Text style={styles.heading}>Quiz Result</Text>
        <Text style={styles.total}>
            Total Questions: {totalQuestions}
        </Text>
        <Text style={styles.incorrect}>
            Incorrect: {incorrect} ({Math.round(incorrect / totalQuestions * 100)}%)
        </Text>
        <Text style={styles.correct}>
            Correct: {correct} ({Math.round(correct / totalQuestions * 100)}%)
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.actionBtn}>Go Back!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRestartQuiz}>
            <Text style={styles.actionBtn}>Restart</Text>
        </TouchableOpacity>
    </View>

const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    total: {
        fontSize: 12,
        fontWeight: 'bold',
        color: gray,
        marginBottom: 20
    },
    correct: {
        color: green,
        margin: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    incorrect: {
        color: red,
        margin: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    actionBtn: {
        backgroundColor: blue,
        color: white,
        borderColor: blue,
        fontWeight: 'bold',
        padding: 20,
        borderWidth: 1,
        margin: 10,
        textAlign: 'center',
        width: Dimensions.get('screen').width - 50
    },
});
import React, { Component } from 'react'
import { blue, white } from '../utils/colors'
import { setLocalNotification, clearLocalNotification } from '../utils/helpers'
import { QuizQuestion } from "./QuizQuestion"
import { QuizResult } from "./QuizResult"

const INITIAL_STATE = {
    correct: 0,
    incorrect: 0,
    questionIndex: 0,
    completed: false,
    showAnswer: false,
}

export default class Quiz extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTintColor: white,
        headerStyle: {
            backgroundColor: blue
        },
        title: `Quiz - ${navigation.state.params.title}`
    })

    state = {
        ...INITIAL_STATE
    }

    handleSubmit = answer => {
        this.setState(prevState => ({
            ...prevState,
            [answer]: prevState[answer] + 1,
            questionIndex: prevState.questionIndex + 1,
            completed: prevState.questionIndex + 1 === this.props.navigation.state.params.questions.length,
        }));
        clearLocalNotification()
        setLocalNotification()
    }

    handleRestartQuiz = () => {
        this.setState({ ...INITIAL_STATE })
    }

    toggleAnswer = () => {
        this.setState(state => ({
            showAnswer: !state.showAnswer
        }))
    }

    render() {
        const { questions } = this.props.navigation.state.params
        const { showAnswer, completed, correct, incorrect, questionIndex } = this.state
        const totalQuestions = questions.length

        return completed
            ? <QuizResult
                correct={correct}
                incorrect={incorrect}
                totalQuestions={totalQuestions}
                navigation={this.props.navigation}
                handleRestartQuiz={this.handleRestartQuiz}
            />
            : <QuizQuestion
                questions={questions}
                questionIndex={questionIndex}
                showAnswer={showAnswer}
                toggleAnswer={this.toggleAnswer}
                handleSubmit={this.handleSubmit}
            />
    }
}



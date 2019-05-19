import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { NavigationEvents } from "react-navigation"
import { blue, white } from '../utils/colors'
import { getDeck } from '../utils/api'
import { gray } from '../utils/colors'
import { AppStatusBar } from "./StatusBar"

export default class DeckDetails extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTintColor: white,
        headerStyle: {
            backgroundColor: blue
        },
        title: navigation.state.params.title
    });

    state = {
        questions: []
    };

    componentDidMount() {
        this.getDeckDetails()
    }

    getDeckDetails = () => {
        getDeck(this.props.navigation.state.params.title)
            .then(data => this.setState({ questions: data.questions }))
            .catch(err =>
                alert("Something went wrong.")
            )
    }

    renderStartQuizButton(title) {
        const { questions } = this.state

        if (questions && questions.length) {
            return (
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Quiz', { ...this.state, title: title })}
                >
                    <Text style={styles.quizStartBtn}>Start Quiz</Text>
                </TouchableOpacity>
            );
        }
        return null;
    }

    render() {
        const title = this.props.navigation.state.params.title;

        return (
            <View style={styles.container}>
                <NavigationEvents onDidFocus={this.getDeckDetails}></NavigationEvents>
                <AppStatusBar />

                <Text style={styles.deckTitle}>{title}</Text>
                <Text style={styles.cardsCount}>{this.state.questions && this.state.questions.length} Cards</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddCard', { title: title })}>
                    <Text style={styles.addCardBtn}>Add Card</Text>
                </TouchableOpacity>
                { this.renderStartQuizButton(title) }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white
    },
    deckTitle: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    cardsCount: {
        fontSize: 16,
        color: gray,
        margin: 5
    },
    addCardBtn: {
        backgroundColor: white,
        color: blue,
        borderColor: blue,
        fontWeight: 'bold',
        padding: 20,
        borderWidth: 1,
        textAlign: 'center',
        margin: 10,
        width: Dimensions.get('screen').width - 50
    },
    quizStartBtn: {
        backgroundColor: blue,
        color: white,
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'center',
        width: Dimensions.get('screen').width - 50
    }
});

import React from 'react'
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Dimensions } from 'react-native'
import { blue, white } from '../utils/colors'
import { addCardToDeck } from '../utils/api'

export default class AddCard extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTintColor: white,
        headerStyle: {
            backgroundColor: blue
        },
        title: `Add Card - ${navigation.state.params.title}`
    });

    state = {
        question: '',
        answer: ''
    };

    onSubmit = () => {
        const { question, answer } = this.state;
        const { title } = this.props.navigation.state.params;
        this.setState({ question: '', answer: '' }, () =>
            addCardToDeck(title, { question, answer })
                .then(() => this.props.navigation.goBack())
                .catch(err =>
                    alert("Something went wrong.")
                )
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Question"
                    onChangeText={text => {
                        this.setState({ question: text })
                    }}
                    value={this.state.question}
                    spellCheck={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Answer"
                    onChangeText={text => {
                        this.setState({ answer: text })
                    }}
                    value={this.state.answer}
                    spellCheck={false}
                />
                <TouchableOpacity onPress={this.onSubmit}>
                    <Text style={styles.submitBtn}>Submit</Text>
                </TouchableOpacity>
                <KeyboardAvoidingView
                    behavior="padding"
                    keyboardVerticalOffset={100}
                />
            </View>
        );
    }
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white
    },
    submitBtn: {
        backgroundColor: blue,
        color: white,
        padding: 20,
        textAlign: 'center',
        width: Dimensions.get('screen').width - 50
    },
    input: {
        padding: 10,
        margin: 10,
        backgroundColor: white,
        color: blue,
        borderBottomColor: blue,
        borderBottomWidth: 1,
        width: Dimensions.get('screen').width - 50
    }
});

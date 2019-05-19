import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Dimensions } from 'react-native'
import { white, blue } from '../utils/colors'
import { saveDeckTitle } from '../utils/api'
import { AppStatusBar } from "./StatusBar"

export class AddDeck extends Component {
    state = {
        title: ''
    }

    handleSubmit = () => {
        const title = this.state.title;
        this.setState({ title: '' }, () => {
            saveDeckTitle(title)
                .then(() => {
                    this.props.navigation.navigate('DeckDetails', {title: title})
                })
                .catch(err => {
                    alert("Something went wrong.")
                })
        });
    };

    handleTextChange = text => {
        this.setState({ title: text })
    }

    render() {
        return (
            <View style={styles.container}>
                <AppStatusBar />

                <Text style={styles.heading}>Add a new Deck</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Deck Title"
                    onChangeText={this.handleTextChange}
                    value={this.state.title}
                    spellCheck={false}
                    underlineColorAndroid={blue}
                />
                <TouchableOpacity onPress={this.handleSubmit}>
                    <Text style={styles.submitBtn}>Add</Text>
                </TouchableOpacity>
                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100} />
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
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        width: '60%',
        textAlign: 'center',
        marginBottom: 10
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
        width: Dimensions.get('screen').width - 50
    }
});

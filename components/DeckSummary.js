import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native"
import { gray, white } from "../utils/colors"

export const DeckSummary = props => (
    <TouchableOpacity
        style={styles.deck}
        onPress={() => props.navigation.navigate('DeckDetails', { title: props.title })}
    >
        <Text style={styles.deckTitle}>{props.title}</Text>
        <Text style={styles.deckCards}>{props.questions.length} Cards</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    deck: {
        flex: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: gray,
        backgroundColor: white,
        width: Dimensions.get('screen').width
    },
    deckTitle: {
        fontSize: 20
    },
    deckCards: {
        fontSize: 16,
        color: gray
    }
});
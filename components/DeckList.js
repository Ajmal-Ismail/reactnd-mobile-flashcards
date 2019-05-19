import React, { Component }  from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { NavigationEvents } from "react-navigation"
import { getAllDecks } from "../utils/api"
import {white} from "../utils/colors";
import { DeckSummary } from "./DeckSummary"
import { AppStatusBar } from "./StatusBar"

export class DeckList extends Component {
    state = {
        decks: [],
        loading: true,
    }

    componentDidMount() {
        this.loadDecks()
    }

    loadDecks = () => {
        getAllDecks()
            .then(data => {
                this.setState({
                    decks: Object.values(data ? data : []),
                    loading: false,
                })
            })
            .catch(err => {
                alert("Something went wrong.")
            })
    }

    render() {
        const { decks, loading } = this.state;

        return (
            <View style={styles.container}>
                <NavigationEvents onDidFocus={this.loadDecks}></NavigationEvents>
                <AppStatusBar />
                {
                    decks.length
                        ? <FlatList
                            data={decks}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) =>
                                <DeckSummary
                                    {...item}
                                    key={item.title}
                                    navigation={this.props.navigation}
                                />
                            }
                        />
                        : <Text style={styles.errorMsg}>
                            { loading
                                ? 'Loading...'
                                : 'Oops. No decks found. Please add a few decks.'
                            }
                        </Text>
                }
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
    errorMsg: {
        fontWeight: 'bold'
    }
});

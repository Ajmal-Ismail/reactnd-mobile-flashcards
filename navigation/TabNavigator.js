import React from 'react'
import { createBottomTabNavigator } from "react-navigation"
import { Feather } from "@expo/vector-icons"
import { AddDeck } from "../components/AddDeck"
import { DeckList } from "../components/DeckList"
import { blue, white } from "../utils/colors"

export const TabNavigator = createBottomTabNavigator(
    {
        DeckList: {
            screen: DeckList,
            navigationOptions: {
                tabBarLabel: "Deck List",
                tabBarIcon: ({ tintColor }) => (
                    <Feather name="list" size={30} color={tintColor} />
                )
            }
        },
        AddDeck: {
            screen: AddDeck,
            navigationOptions: {
                tabBarLabel: "New Deck",
                tabBarIcon: ({ tintColor }) => (
                    <Feather name="plus" size={30} color={tintColor} />
                )
            }
        }
    },
    {
        navigationOptions: {
            header: null
        },
        tabBarOptions: {
            activeTintColor: blue,
            style: {
                height: 60,
                backgroundColor: white,
            },
            labelStyle: {
                paddingTop: 3,
                fontSize: 14,
                fontWeight: "bold"
            }
        }
    }
);
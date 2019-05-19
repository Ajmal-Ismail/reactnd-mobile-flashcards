import React from 'react'
import { createAppContainer } from "react-navigation"

import { StackNavigator } from "./navigation/StackNavigator"
import { setLocalNotification } from "./utils/helpers"

const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {
    componentDidMount() {
        setLocalNotification()
    }

    render() {
        return (
            <AppContainer/>
        );
    }
}
import React from 'react'
import {Constants} from "expo"
import {StatusBar, View} from "react-native"
import { white } from '../utils/colors'

export const AppStatusBar = ({ ...props }) => (
    <View style={{ white, height: Constants.statusBarHeight }}>
        <StatusBar translucent backgroundColor={white} {...props} />
    </View>
);
import { createStackNavigator } from "react-navigation"
import AddCard from "../components/AddCard"
import DeckDetails from "../components/DeckDetails"
import Quiz from "../components/Quiz"
import { TabNavigator } from "./TabNavigator"

export const StackNavigator = createStackNavigator(
    {
        Home: TabNavigator,
        DeckDetails: DeckDetails,
        AddCard: AddCard,
        Quiz: Quiz
    },
    {
        initialRouteName: "Home",
    }
);
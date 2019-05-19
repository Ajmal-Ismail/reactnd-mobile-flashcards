import {AsyncStorage} from 'react-native'

const STORAGE_KEY = 'UdacityFlashcards:store'

export const getAllDecks = () =>
    AsyncStorage.getItem(STORAGE_KEY)
        .then(d => JSON.parse(d))
        .catch(err => {
            console.log(err)
            throw err
        });

export const saveDeckTitle = title =>
    AsyncStorage.getItem(STORAGE_KEY)
        .then(data => {
            data = JSON.parse(data)
            data = data ? data : {}
            data[title] = {
                title,
                questions: []
            };
            return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        })
        .catch(err => {
            console.log(err)
            throw err
        });

export const getDeck = id =>
    AsyncStorage.getItem(STORAGE_KEY)
        .then(data => {
            data = JSON.parse(data)
            return data[id]
        })
        .catch(err => {
            console.log(err)
            throw err
        });

export const addCardToDeck = (title, card) =>
    AsyncStorage.getItem(STORAGE_KEY)
        .then(data => {
            data = JSON.parse(data)
            data[title].questions = data[title].questions.concat(card)
            return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        })
        .catch(err => {
            console.log(err)
            throw err
        });

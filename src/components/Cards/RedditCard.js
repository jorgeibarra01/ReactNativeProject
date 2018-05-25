import React from 'react'
import {Cards} from './Cards';
import {CardSection} from './CardSection';
import { TouchableOpacity, Text, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const RedditCard = ({onPressButton,textStuff, children}) => {
    
    console.log("hi?");
    const {cardContainer, touchableContainer} = styles;
    return (
        <View style={cardContainer}>
        <TouchableOpacity  onPress={onPressButton} style={touchableContainer}>
            <View> 
                {children}
            </View> 
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 2,
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowOffset: { width: 10, height: 10, },
        shadowRadius: 2,
        elevation: 1,
        margin:10, 
    }, 
    touchableContainer: {
        padding: 20,
    }, 
});

export { RedditCard };
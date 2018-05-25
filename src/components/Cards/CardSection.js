import React from 'react';
import {View, StyleSheet} from 'react-native';

const CardSection = ({children}) => {
    const {cardSectionContainer} = Styles;
    return (
        <View style={cardSectionContainer}>
            {children}
        </View>
    );
};

const Styles = StyleSheet.create({
    cardSectionContainer: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5
        ,flexDirection: 'row',
        alignItems: 'center',
    }
});

export {CardSection};
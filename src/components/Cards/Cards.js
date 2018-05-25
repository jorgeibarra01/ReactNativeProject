import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';


const Cards = ({ children }) => {
    const { cardsContainerStyle } = Styles;

    return (
        <View style={cardsContainerStyle}>
            {children}
        </View>
    );
};


const Styles = StyleSheet.create({
    cardsContainerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 2,
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowOffset: { width: 10, height: 10, },
        shadowRadius: 2,
        elevation: 1,
         margin: 10,
        padding: 20,

    }
});

export { Cards };

    // onPress = () => {
    //     this.props.navigation.navigate('Details', {
    //       itemId: 86,
    //       otherParam: 'Details',
    //     });
    //   }
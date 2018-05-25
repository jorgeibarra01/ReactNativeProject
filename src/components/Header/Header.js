import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

const Header = ({headerText}) => {
    const {headerContainerStyle,headerFontStyle} = Styles;
    return (
        <View style={headerContainerStyle}>
            <Text style={headerFontStyle}>{headerText}</Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    headerContainerStyle: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        shadowColor: '#DCDCDC',
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    headerFontStyle: {
        fontSize: 14,
        fontWeight: "800"
    }
});

export {Header};
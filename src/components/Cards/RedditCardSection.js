import React from 'react'; 
import {Text, View, StyleSheet} from 'react-native'; 
const RedditCardSection = ({children, CardStyle}) => {
    const {RedditCardSectionStyles} = Styles;     
    return(
        <View style={CardStyle}>
            {children}
        </View> 
    ); 

}; 

const Styles = StyleSheet.create({
    RedditCardSectionStyles: {
        margin: 10, 
    }
});
export {RedditCardSection};

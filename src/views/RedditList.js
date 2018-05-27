import React, { Component } from 'react'
// import {RedditCard, RedditCardSection} from '../components';
import { RedditCard } from '../components/Cards/RedditCard'; 
import { RedditCardSection } from '../components/Cards/RedditCardSection'; 
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import { navigation } from 'react-navigation'; 
const data = [
    { 
      Title: 'Galaxy', 
      description: 'Some content about this card fsdjfkdsjfmsdfsdfsd;lfksd;fksd;lfksd;fksdlfksdflsdsdlfksd;lfksdflsdkf;lsdfsd;klf;lsdfksd;lfksdk;lfksdfkldj jfklsdjfdkssjflsdk', 
      imageurl: 'https://facebook.github.io/react/logo-og.png',
      _id: 1 
    },
    {
      Title: 'Snickers', 
      description: 'Some content about this card fsdjfkdsjfmsdfsdfsd;lfksd;fksd;lfksd;fksdlfksdflsdsdlfksd;lfksdflsdkf;lsdfsd;klf;lsdfksd;lfksdk;lfksdfkldj jfklsdjfdkssjflsdk', 
      imageurl: 'https://facebook.github.io/react/logo-og.png',
      _id: 2 
      }
  ];
  
class RedditList extends Component {
    constructor(props) {
        super(props);
    
        // need to bind `this` to access props in handler
        
        // this.onPressButton = this.onPressButton.bind(this);
      }
    
    onPressButton = () => {
        // alert(typeof this.props.navigation);
        // this.navigation
        this.props.navigation.navigate('Details');
    }    


    render() {
    // const { navigate } = this.props.navigation;
    const {textContainer, imageRightContainer, imageTopContainer, cardSectionStyle, titleStyle, ImageBig, flow, RedditCardSectionStyles} = Styles;
        
        return (
            <ScrollView>
            {data.map((NewsData) =>
            <RedditCard onPressButton={this.onPressButton}> 
                <RedditCardSection CardStyle={[flow, RedditCardSectionStyles,]}>
                    <View style={textContainer}>
                        <Text style={titleStyle}>{NewsData.Title}</Text>
                        <Text>{NewsData.description}</Text>
                    </View>
                    <View style={imageRightContainer}>
                        <Image source={{ uri: NewsData.imageurl}}
                            style={{ width: 100, height: 100 }} />
                    </View>
                </RedditCardSection> 
            </RedditCard> )}
                    <RedditCard  onPressButton={this.onPressButton}> 
                        <RedditCardSection CardStyle={[flow, RedditCardSectionStyles,]}>
                            <View style={textContainer}>
                                <Text style={titleStyle}>Title</Text>
                                <Text>Some content about this card fsdjfkdsjfmsdfsdfsd;lfksd;fksd;lfksd;fksdlfksdflsd
                                    sdlfksd;lfksdflsdkf;lsd
                                    fsd;klf;lsdfksd;lfksdk;lfksdfkldj jfklsdjfdkssjflsdk</Text>
                            </View>
                            <View style={imageTopContainer}>
                                <Image source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
                                    style={ImageBig} />
                            </View>
                        </RedditCardSection> 
                    </RedditCard> 
            </ScrollView>            
        );
    }
}

const Styles = StyleSheet.create({
    listContainer: {

    },
    cardSectionStyle:{
        
    },
    textContainer: {
        flexDirection: 'column',
        flex: 1
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageRightContainer: {
        paddingRight: 25,
        paddingTop: 10,
    },
    canvas: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }, 
    imageTopContainer:{
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        paddingTop: 10,
    }, 
    ImageBig: {
        width: 200, 
        height: 200
    },
    flow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    RedditCardSectionStyles: {
        margin: 10, 
    }


});
export default RedditList;
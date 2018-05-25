import React, { PureComponent } from 'react';
import { TouchableOpacity, View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { Cards, CardSection } from '../components'

const data = [5,5,5,5,5,5,5,5,5,]
class CardLists extends PureComponent {
    render() {
    const {textContainer, imageContainer, cardSectionStyle, titleStyle} = Styles;
        
        return (
            <ScrollView>
                {data.map(() =>
                <Cards>
                    <CardSection >
                        <View style={textContainer}>
                            <Text style={titleStyle}>Title</Text>
                            <Text>Some content about this card fsdjfkdsjfmsdfsdfsd;lfksd;fksd;lfksd;fksdlfksdflsd
                                sdlfksd;lfksdflsdkf;lsd
                                fsd;klf;lsdfksd;lfksdk;lfksdfkldj jfklsdjfdkssjflsdk</Text>
                        </View>
                        <View style={imageContainer}>
                            <Image source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
                                style={{ width: 100, height: 100 }} />
                        </View>
                    </CardSection>
                    {/* <CardSection >
                        <View style={imageContainer}>
                            <Image source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
                                style={{ width: 300, height: 300 }} />
                        </View>
                    </CardSection> */}
                </Cards>)}
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
    imageContainer: {
        paddingRight: 25,
        paddingTop: 10,
    },
    canvas: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }

});

export default CardLists;



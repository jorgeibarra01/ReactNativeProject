import React from 'react'; 
import { Text, View, Image, Button } from 'react-native';

const data = [
    { 
      Title: 'Galaxy', 
      description: 'Some content about this card fsdjfkdsjfmsdfsdfsd;lfksd;fksd;lfksd;fksdlfksdflsdsdlfksd;lfksdflsdkf;lsdfsd;klf;lsdfksd;lfksdk;lfksdfkldj jfklsdjfdkssjflsdk', 
      imageurl: 'https://facebook.github.io/react/logo-og.png',
      _id: 1 
    },
  ];

export default class EventDetails extends React.Component {
    constructor() {
      super();
    }
    render(){
      return (
        <View> 
            {data.map((NewsData) => 
            <View> 
                <Image source={{ uri: NewsData.imageurl}} style={{ width: 425, height: 425 }} />
                <Text> {NewsData.Title}</Text>
                <Text>{NewsData.description}</Text>
            </View> 
            )} 
        </View> 
        ); 
    }
}   

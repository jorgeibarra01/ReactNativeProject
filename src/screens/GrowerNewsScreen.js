import React from 'react';
import { TouchableOpacity, Button, FlatList, ActivityIndicator, Text, View, Image } from 'react-native';
//import { Header, } from './src/components';
import CardLists from '../views/CardLists'; 
import RedditList from '../views/RedditList';
import Header from '@bit/tyson-foods-it.react-native-ui.components.header'; 


export default class GrowerNewsScreen extends React.Component {
  constructor() {
    super();
  }
  render(){
    return (
      <React.Fragment> 
        <View style={{ flex:1, }}> 
          {/* <CardLists /> */}
          <Button
            title = "Go to Details... again"
            onPress={() => this.props.navigation.navigate('Details')}
          /> 
          <RedditList navigation={this.props.navigation}/>
        </View> 
        {/* <Header headerText="GROWER APP" /> */}
      </React.Fragment> 
    ); 
  }
}
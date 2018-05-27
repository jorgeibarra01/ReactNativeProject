import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, Button } from 'react-native';
import RedditList from '../views/RedditList';


export default class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props; 
    const itemId = navigation.getParam('itemId', 'WHAT NO-ID'); 
    const otherParam = navigation.getParam('otherParam', 'some default value'); 
  
    return (
      <View style={{ flex: 1, }}>
        <Button
            title = "Go to Details... again"
            onPress={() => this.props.navigation.navigate('Details')}
          /> 
          <RedditList  navigation={this.props.navigation}/>
      
        {/* <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text> 
        <Text>OtherParam: {JSON.stringify(otherParam)}</Text> 
        <Button
          title = "Go to Details... again"
          onPress={() => 
            this.props.navigation.push('Details', {
                itemId: Math.floor(Math.random() * 100), 
            })}
        /> 
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
        />
      <Button
        title="Go to Home"
        onPress={() => this.props.navigation.navigate('GrowerNews')}
      />
      <Button
        title="Go back"
        onPress={() => this.props.navigation.goBack()}
      /> */}
      </View>
    );
  }
}
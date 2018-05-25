import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image } from 'react-native';
// import Header from '@bit/tyson-foods-it.react-native-ui.components.header'; 
import { createStackNavigator, navigation, navigate } from 'react-navigation';
import HomeScreen from '../../App'; 

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    
    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
    }
  };
  render() {
    const { navigation } = this.props; 
    const itemId = navigation.getParam('itemId', 'NO-ID'); 
    const otherParam = navigation.getParam('otherParam', 'some default value'); 
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
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
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go back"
        onPress={() => this.props.navigation.goBack()}
      />
      </View>
    );
  }
}
<HomeScreen /> 
export class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
const RootStack = createStackNavigator(
  {
      Home: HomeScreen,
      Details: DetailsScreen,
  },
  {
      initialRouteName: 'Home',
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#002554', 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        }, 
      },
  }
);
  
export default DetailsScreen;
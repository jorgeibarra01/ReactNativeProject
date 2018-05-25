import React from 'react';
import { TouchableOpacity, Button, FlatList, ActivityIndicator, Text, View, Image } from 'react-native';
//import { Header, } from './src/components';
import CardLists from './src/views/CardLists'; 
import RedditList from './src/views/RedditList';
import Header from '@bit/tyson-foods-it.react-native-ui.components.header'; 
import { createStackNavigator } from 'react-navigation';
// import DetailsScreen from './src/screens/DetailsScreen'; 


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home', 
  };
  render(){
    return (
      <React.Fragment> 
        <View style={{ flex:1, }}> 
          {/* <CardLists /> */}
          <Button
            title = "Go to Details... again"
            onPress={() => this.props.navigation.navigate('Details')}
          /> 
          <RedditList bleh={RootStack}/>
        </View> 
        {/* <Header headerText="GROWER APP" /> */}
      </React.Fragment> 
    ); 
  }
}

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
{/* <DetailsScreen /> */}
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
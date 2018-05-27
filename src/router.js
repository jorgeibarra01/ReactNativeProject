import React from 'react';
import { StackNavigator, SwitchNavigator} from 'react-navigation';

import GrowerNewsScreen from './screens/GrowerNewsScreen';
import DetailsScreen from './screens/DetailsScreen';
import EventDetails from './screens/EventDetails';


export const RootStack = StackNavigator(
    {
        GrowerNews: {
          screen: GrowerNewsScreen,
          navigationOptions: {
              title: 'Grower News Screen', 
          },
        },
        SecondMenu:
        { 
          screen: DetailsScreen,
          navigationOptions : {
            title: 'Details Screen', 
            headerMode: 'screen', 
            
          }, 
        },
        Details:
        { 
          screen: EventDetails,
          navigationOptions : {
            title: 'News Details', 
            headerMode: 'screen', 
            
          }, 
        },
    },
    {
        initialRouteName: 'GrowerNews',
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


export const MainSwitch = SwitchNavigator({
    RootStack:RootStack,
  },
  {
    initialRouteName: 'RootStack',
  }
)

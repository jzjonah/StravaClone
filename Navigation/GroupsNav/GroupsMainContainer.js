import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-ionicons'
import IonIcon from 'react-native-vector-icons/Ionicons';

//Screens
import ActiveScreen from './ActiveScreen';
import ChallengesScreen from './ChallengesScreen';
import ClubsScreen from './ClubsScreen';
//Screen names
const activeName = 'Active';
const challengesName = 'Challenges';
const clubName = 'Clubs';



const Tab = createMaterialTopTabNavigator();

export default function GroupsMainContainer(){
    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator
            initialRouteName={clubName}
            >

            <Tab.Screen name={activeName} component={ActiveScreen}/>
            <Tab.Screen name={challengesName} component={ChallengesScreen}/>
            <Tab.Screen name={clubName} component={ClubsScreen}/>
            
            
           

            </Tab.Navigator>
        </NavigationContainer>
    )
}
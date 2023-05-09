import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-ionicons'
import IonIcon from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './screens/HomeScreen';
import MapsScreen from './screens/MapsScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import RecordScreen from './screens/RecordScreen';
import GroupsScreen from './screens/GroupsScreen';


//Screen names
const homeName = 'Home';
const mapName = 'Maps';
const profileName = 'You';
const recordName = 'Record';
const groupsName = "groups"


const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions = {({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn == homeName){
                        iconName = focused ? 'home' : 'home-outline'
                    }else if (rn == mapName){
                        iconName = focused ? 'map' : 'map-outline'
                    } else if (rn == profileName){
                        iconName = focused ? 'person' : 'person-outline'
                    } else if(rn == recordName){
                        iconName = focused ? 'add-circle' : 'add-circle-outline'
                    } else if (rn == groupsName){
                        iconName = focused ? 'people' : 'people-outline'
                    }

                    return <IonIcon name= {iconName} size={size} color={color}/>
                },

            })} 
            tabBarOption={{
                activeTintColor:'tomato',
                inactiveTintColor:'grey',
                labelStyle: { paddingBottom:10, fontSize:10},
                
            }}
            >

            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={mapName} component={MapsScreen}/>
            <Tab.Screen name={recordName} component={RecordScreen}/>
            <Tab.Screen name={groupsName} component={GroupsScreen}/>
            <Tab.Screen name={profileName} component={ProfileScreen}/>
            
            
           

            </Tab.Navigator>
        </NavigationContainer>
    )
}
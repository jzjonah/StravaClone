import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback  } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function SettingsScreen(){
    return(
        <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
        <View style={styles.container} >
            <IonIcon name='search' style = {styles.icon} color={'#FF6600'}/>
           <View style = {styles.textContainer}>
                <Text style = {styles.textHeader}>
                    Explore Clubs
                </Text>
                <Text style = {styles.textDetails}>
                    Discover now clubs and quickly find your favorites
                </Text>
           </View>
           <IonIcon name="chevron-forward-outline" style={styles.icon} color = {'gray'}/>

        </View>
        </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingBottom:10,
        flexDirection: 'row',
        paddingTop:10,
        backgroundColor:'white'
    },
    icon:{
        fontSize:40,
        paddingRight:10,
    },
    textContainer:{
        flex:1,
        paddingTop:5,
    },
    textHeader:{
        fontSize:17,
        fontWeight:'bold'
    },
    textDetails:{
        fontSize: 12
    }
})
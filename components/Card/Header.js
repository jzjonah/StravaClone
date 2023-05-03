import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function Header({navigation}){
    return(
        <View style = {styles.header}>
            <Image
                source={require('../../assets/favicon.png')}
                style={styles.profilePic}
            />
            <View style={styles.text}>
                
                <Text style={styles.profileName}>Jonah Zimmer</Text>
                <View style={styles.info}>
                    <IonIcon name='walk'></IonIcon>
                    <Text style={styles.activityInfo}>April 19, 2023 at 1:48 pm - Thames Centre, Ontario</Text>
                </View>
                
                

            </View>
            
        
        </View>
  );
}
//Constants
profilePicSize = 45;

const styles = StyleSheet.create({
    header: {
        flexDirection :'row',
        marginTop:20,
        marginLeft:20
    },
    profilePic:{
        width: profilePicSize,
        height: profilePicSize,
        borderRadius: profilePicSize / 2,
        overflow: 'hidden',
    },
    text:{
        flexDirection: 'column',
        padding: 5,
    },
    profileName:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    info:{
        flexDirection:'row'
    },
    activityInfo:{
        fontSize: 10
    }
})
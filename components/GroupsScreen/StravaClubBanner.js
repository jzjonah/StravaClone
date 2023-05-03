import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IonIcon from 'react-native-vector-icons/Ionicons';
export default function StravaClubBanner(){
    return(
        <View style={styles.container} >
           <View style={styles.header}>
           <Image
              source={require('../../assets/strava-logo.png')}
              style={styles.stravaImage}
              />
            <View>
                <Text style={styles.stravaTitle}>The Strava Club</Text>
                <View style={styles.info}>
                    <IonIcon name = 'trail-sign-outline' style = {styles.icon}/>
                    <Text style={styles.location}>San Fransisco, Califorina</Text>
                </View>
            
            </View>
            
           </View>
           <Text style={styles.athletesNumber}>4,427,336 Athletes</Text>
           <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.joinText}>Join</Text>
           </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
    container:{
        
        backgroundColor: 'white',
        
    },
    header:{
        flexDirection:'row'
    },
    stravaImage:{
        marginTop:20,
        marginLeft:20,
        height:50,
        width:50
    },
    stravaTitle:{
        marginTop:20,
        marginLeft: 10,
        fontSize:18,
        fontWeight:'bold'
    },
    info:{
        marginTop:10,
        flexDirection:'row',
    },
    icon:{
        marginTop:2,
        marginLeft:10,
        marginRight: 5,
        color:'gray'
    },
    location:{
        color:'gray'
    },
    athletesNumber:{
        marginLeft:97,
        marginTop:20,
        color:'gray'
    },
    joinButton:{
        width:'90%',
        height:40,
        margin:20,
        backgroundColor:'#FF6600',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    joinText:{
        color:'white',
        fontSize:15,
    }
})
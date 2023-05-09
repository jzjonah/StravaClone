import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function MainChallenge(){
    return(
        <View style={styles.container} >
           <View style = {styles.headerContainer}>
                <Image
                    source={require('../../assets/favicon.png')}
                    style={styles.challengePic}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>The Le Col Giro Challenge</Text>
                    <View style={styles.infoContainer}>
                        <IonIcon name="checkmark-done-circle-outline" style={styles.icon}/>
                        <IonIcon name="medal-outline" style={styles.icon}/>
                        <Text style={styles.requirmentsText}>Log 250 minutes of activity</Text>
                    </View>
                </View>
           </View>
           <Text style={styles.durationText}> May 6 to May 26, 2023</Text>
           <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.joinText}>Join</Text>
            </TouchableOpacity>

        </View>
  );
}
challengePicSize = 55;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        marginBottom:5
    },
    headerContainer:{
        flexDirection:'row',
        marginBottom:15,
        width:'100%'
    },
    challengePic:{
        width: challengePicSize,
        height: challengePicSize,
        marginLeft: 20,
        marginTop:15,
    },
    textContainer:{
        marginTop:15,
        marginLeft:10
    },
    title:{
        fontSize: 18,
        fontWeight:'bold'
    },
    infoContainer:{
        flexDirection:'row',
        marginTop:18,
        alignItems:'center'
    },
    icon:{
        fontSize:15,
        marginRight:5,
    },
    requirmentsText:{
        color:'gray'
    },
    durationText:{
        color:'gray',
        marginBottom:10
    },
    joinButton:{
        width:'90%',
        height:45,
        margin:10,
        backgroundColor:'#FF6600',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    joinText:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
    }

})
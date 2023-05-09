import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function StravaSubscription(){
    return(
        <View style={styles.container} >
           <Text style={styles.subText}>STRAVA SUBSCRIPTION</Text>
           <Text style={styles.tryGroup}>Try Group      Challenges</Text>
           <Text style={styles.descriptionText}>
                Play just with your friends. Your rules, your way! Try 2 Group Challenges for free now or subscribe for unlimited access
            </Text>

            <TouchableOpacity style={styles.CreateChallengeButton}>
                <Text style={styles.createText}>Create a Group Challenge</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.freeTrialButton}>
                <Text style={styles.freeTrialText}>Start Your Free Trial</Text>
            </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
    container:{
        
        backgroundColor: 'white',
        marginBottom:15
    },
    subText:{
        marginLeft:15,
        marginTop:20,
        fontSize:10
    },
    tryGroup:{
        fontSize: 40,
        marginLeft:15,
        marginTop: 25
    },
    descriptionText:{
        marginLeft:15,
        marginTop: 25,
        marginBottom:15,
        fontSize: 15,
    },
    CreateChallengeButton:{
        width:'95%',
        height:45,
        marginHorizontal:10,
        marginVertical:10,
        backgroundColor:'#FF6600',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    createText:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
    },
    freeTrialButton:{
        width:'95%',
        height:45,
        marginHorizontal:10,
        marginVertical:10,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#FF6600'
    },
    freeTrialText:{
        color:'#FF6600',
        fontSize:15,
        fontWeight:'bold',
    }
})
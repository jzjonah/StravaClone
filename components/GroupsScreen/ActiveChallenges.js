import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import challenges from '../../data/Challenges';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function ActiveChallenges(){
    return(
        <View style={styles.container} >
            <Text style={styles.availableText}>Available challenges</Text>
           {challenges.slice(0,3).map(challenge => (
            <View style={styles.cardContainer} key={challenge.id}>
                <Image
                    source={require('../../assets/favicon.png')}
                    style={styles.challengPicture}
                />
                <View style={styles.textContainer}>
                    <Text  style={styles.titleText}>{challenge.title}</Text>
                    <Text style={styles.goal}>{challenge.goal}</Text>
                    <Text style={styles.duration}>{challenge.duration}</Text>
                </View>
            </View>
           ))}
            <TouchableWithoutFeedback style={styles.challengesButton}>
                <Text 
                    style={styles.buttonText}> See All Challenges</Text>
            </TouchableWithoutFeedback>
        </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        
    },
    availableText:{
        color:'gray',
        marginLeft: 20,
        marginTop:15
    },
    cardContainer:{
        marginTop:20,
        marginLeft:15,
        borderBottomWidth:1,
        borderBottomColor:'#D3D3D3',
        flexDirection:'row',
    },
    titleText:{
        fontSize:20,
        fontWeight:'bold',
    },
    challengPicture:{
        height:60,
        width:60,
        borderRadius:5
    },
    textContainer:{
        marginLeft:15,
        marginBottom:15
    },
    goal:{
        marginTop:10
    },
    duration:{
        marginTop:10,
        color:'gray'
    },
    challengesButton:{
        marginVertical:10,
        marginRight:10,
        alignItems:'flex-end',
    },
    buttonText:{
        color:'#FF6600',
        
    }
})
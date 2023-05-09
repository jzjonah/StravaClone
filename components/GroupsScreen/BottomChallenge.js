import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function BottomChallenge(){
    return(
        <View style={styles.container} >
           <Image
                    source={require('../../assets/challengesArt.png')}
                    style={styles.picture}
                />
            <View style={styles.header}>
                <Image
                    source={require('../../assets/favicon.png')}
                    style={styles.challengPicture}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title}> Virtual RBC Brooklyn Half</Text>
                    <Text style={{marginBottom: 10}}>Complete a 13.1 mile run</Text>
                    <Text style={{marginBottom:10, color:'gray'}}>Run 13.1 miles and earn a finisher badge</Text>

                    <TouchableOpacity style={styles.registerButton}>
                                <Text style={styles.registerText}>Register</Text>
                        </TouchableOpacity>
                </View>
            

            </View>

        </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:15
    },
    picture:{
        width:'100%'
    },
    header:{
        flexDirection:'row',
        backgroundColor:'white'
    },
    challengPicture:{
        height:60,
        width:60,
        marginTop:15,
        marginLeft:15,
        borderRadius:5
    },
    textContainer:{
        marginTop: 15,
        marginLeft:15
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom: 10
    },
    registerButton:{
        width:'40%',
        height:40,
        marginBottom: 20,
        marginTop:10,
        backgroundColor:'#FF6600',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    registerText:{
        color:'white',
        fontSize:15,
    }
})
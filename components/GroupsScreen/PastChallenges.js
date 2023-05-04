import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function PastChallenges(){
    return(
        <View style={styles.container} >
           <IonIcon name="flag" style = {styles.iconFlag}/>
           <View style={styles.textContainer}>
                <Text style={styles.mainText}>Past Group Challenges</Text>
                <Text style={styles.textValue}>1</Text>
           </View>
           <IonIcon name="chevron-forward-outline" style={styles.iconChevron} color = {'gray'}/>

        </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        height:70,
        paddingLeft:15
    },
    iconFlag:{
        
        fontSize:30,
        color:"#FF6600",
        paddingLeft:10
    },
    textContainer:{
        marginLeft:15
    },
    mainText:{
        fontSize:13,
        fontWeight:'bold',
        marginBottom:5
    },
    textValue:{
        color:'gray'
    },
    iconChevron:{
        fontSize:30,
        color:'gray',
        marginLeft:120
    }
})
import * as React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';


export default function ButtonDoc({navigation}){
    return(
        <View style={styles.container} >
            <View style={styles.buttonContainer}>
                <TouchableWithoutFeedback style={styles.button}>
                    <IonIcon style= {styles.icon} name='thumbs-up-outline'></IonIcon>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableWithoutFeedback style={styles.button}>
                    <IonIcon style={styles.icon} name='chatbox-ellipses-outline'></IonIcon>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableWithoutFeedback style={styles.button}>
                    <IonIcon style={styles.icon} name='exit-outline'></IonIcon>
                </TouchableWithoutFeedback>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor:'#E7E9E8',
    },
    buttonContainer:{
        height: 60,
        justifyContent: 'center',
        
    },
    button:{
        flex:1,
        
        
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon:{
        fontSize:35
    }
})
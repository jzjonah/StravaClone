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
        backgroundColor:'#F5F5F5',
        borderBottomWidth:1,
        borderBottomColor:"#D3D3D3",
        height:60
        
    },
    buttonContainer:{
        height: 35,
        width:131,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: "#D3D3D3",
        

        
    },
    button:{
        flex:1,
        
        
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon:{
        fontSize:25
    }
})
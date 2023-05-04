import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import clubs from '../../data/Clubs';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function ClubsList({thing}){
    return(
        <View style={styles.container} >
            
           <FlatList
            numColumns={2}
                keyExtractor={(item) => item.id}
                data = {thing}
                renderItem={({ item })=> (
                    <View style={styles.card}>
                        <Image
                            source={require('../../assets/favicon.png')}
                            style={styles.profilePic}
                        />
                        <Text style={styles.title}>{item.name}</Text>
                        <IonIcon name={item.icon} style={styles.cardIcon}/>
                        <Text style={styles.location}>{item.location}</Text>
                        <Text style={styles.location}>{item.athleteNum} {item.type}</Text>
                        <TouchableOpacity style={styles.joinButton}>
                                <Text style={styles.joinText}>Join</Text>
                        </TouchableOpacity>

                    </View>
                )}
            />

        </View>
  );
}

profilePicSize=60;

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:10
    },

    card:{
        backgroundColor:'white',
        margin:3,
        flex:1,
        borderRadius: 3
    },
    profilePic:{
        width: profilePicSize,
        height: profilePicSize,
        borderRadius: profilePicSize / 2,
        overflow: 'hidden',
        margin:15,
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        margin:10,
        height:45
    },
    cardIcon:{
        fontSize:15,
        marginLeft:8,
    },
    location:{
        margin:10,
        fontSize:10,
        color:'gray'

    },
    joinButton:{
        width:'90%',
        height:30,
        margin:10,
        marginTop:30,
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
import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import clubs from '../../data/Clubs';
export default function ChallengesSelector(){
    return(
        <View style={styles.container} >
           <FlatList
            
                keyExtractor={(item) => item.id}
                style={styles.list}
                data = {clubs}
                horizontal={true}
                showsHorizontalScrollIndicator ={false}
                renderItem={({ item })=> (
                    <View style={styles.card}>
                        
                        <Text>run</Text>
                    </View>
                )}
            />


        </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:60,
        backgroundColor:'white',
        paddingBottom:10,
        alignItems: 'center',
        borderBottomWidth:1,
        borderColor:'#D3D3D3'
    },
    card:{
        height:30,
        width:75,
        marginHorizontal:5,
        marginTop:15 ,
        borderWidth: 1,
        borderColor:'#D3D3D3',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    list:{
        backgroundColor:'white'
    }
})
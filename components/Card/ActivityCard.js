import * as React from 'react';

import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import runPosts from '../../data/Posts';
import Header from './Header';
import RunStats from './RunStats';
import { SafeAreaView } from 'react-navigation';
import ButtonDoc from './ButtonDoc';



export default function ActivityCard(){
    
    return(
        <View style={styles.container} >
            <FlatList
            numColumns={1}
                keyExtractor={(item) => item.id}
                data = {runPosts}
                renderItem={({ item })=> (
                    <SafeAreaView style={styles.safeArea}>
                        <View style= {styles.card}>
                            <Header/>
                            <RunStats/>
                            
                            
                        </View>
                        
                        <View>
                        <Image
                            source={require('../../assets/stravaRun.png')}
                            style={styles.activityRoute}
                            />
                        </View>
                        <ButtonDoc/>
                    </SafeAreaView>
                )}
            />
        </View>
  );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignContent:'center',
        marginBottom:12
        
        
        
    },
    safeArea:{
        paddingBottom:0
    },
    card: {
        
        backgroundColor:'white',
        paddingBottom:20

    },
    
    
    activityRoute:{
        width: '100%'
    }
    
})
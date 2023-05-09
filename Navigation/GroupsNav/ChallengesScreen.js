import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import ClubsList from '../../components/GroupsScreen/ClubsList';
import clubs from '../../data/Clubs';
import ChallengesSelector from '../../components/GroupsScreen/ChallengesSelector';
import PastChallenges from '../../components/GroupsScreen/PastChallenges';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MainChallenge from '../../components/GroupsScreen/MainChallenge';


export default function ChallengesScreen(){
  return(
      <View style={styles.container}>
        <ChallengesSelector/>
        <ScrollView style={styles.container} >
          <PastChallenges/>
          <Image
              source={require('../../assets/bikers.png')}
              style={styles.bannerImage}
              />
          <MainChallenge/>
          <View style ={styles.titleContainer}>
                <IonIcon name="person-circle" style={styles.icon}/>
                <View style = {styles.textContainer}>
                  <Text style={styles.popularText}>Recommended For You </Text>
                  <Text>Based on your activities</Text>
                </View>
            </View>
            
            <ClubsList thing= {clubs}/>
        </ScrollView>
      </View>
);
}

const styles =StyleSheet.create({
container:{
  flex:1,
  
},
item:{
  paddingBottom:10
},
bannerImage:{
  width:'100%',
  marginTop:12
},
titleContainer:{
  flexDirection:'row',
  alignItems:'center',
  height:60
},
icon:{
  
  fontSize: 40,
  marginLeft:10,
  color:'#D3D3D3'
},
textContainer:{
  marginLeft:10
},
popularText:{
  
  fontSize:15,
  fontWeight:'bold'
},
})
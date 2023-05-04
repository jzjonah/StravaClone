import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image, ScrollView } from 'react-native';
import ExploreBanner from '../../components/GroupsScreen/ExploreBanner';
import StravaClubBanner from '../../components/GroupsScreen/StravaClubBanner';
import ClubsList from '../../components/GroupsScreen/ClubsList';
import clubs from '../../data/Clubs';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function ClubsScreen(){
    return(
        <ScrollView style={styles.container} >
           <ExploreBanner/>
           <Image
              source={require('../../assets/clubsBanner.png')}
              style={styles.bannerImage}
              />
            <StravaClubBanner/>
            <View style ={styles.titleContainer}>
                <IonIcon name="nuclear-outline" style={styles.icon}/>
                <Text style={styles.popularText}>Popular Clubs Near You </Text>

            </View>
            <ClubsList thing= {clubs} text = "Popular Clubs Near You"/>
        </ScrollView>
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
    flexDirection:'row'
},
icon:{
    margin:18,
    fontSize: 20,
    fontWeight:'bold'
},
popularText:{
    marginVertical:15,
    fontSize:20,
    fontWeight:'bold'
},
})
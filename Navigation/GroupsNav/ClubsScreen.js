import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image, ScrollView } from 'react-native';
import ExploreBanner from '../../components/GroupsScreen/ExploreBanner';
import StravaClubBanner from '../../components/GroupsScreen/StravaClubBanner';
import ClubsList from '../../components/GroupsScreen/ClubsList';

export default function ClubsScreen(){
    return(
        <ScrollView style={styles.container} >
           <ExploreBanner/>
           <Image
              source={require('../../assets/clubsBanner.png')}
              style={styles.bannerImage}
              />
            <StravaClubBanner/>
            <ClubsList/>
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
  }
})
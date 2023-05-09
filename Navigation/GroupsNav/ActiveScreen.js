import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import StravaSubscription from '../../components/GroupsScreen/StravaSubscription';
import ActiveChallenges from '../../components/GroupsScreen/ActiveChallenges';
import BottomChallenge from '../../components/GroupsScreen/BottomChallenge';

export default function ActiveScreen(){
    return(
        <ScrollView style={{flex: 1}} >
           <StravaSubscription/>
           <ActiveChallenges/>
           <BottomChallenge/>

        </ScrollView>
  );
}
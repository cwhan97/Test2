import React, {useState, useEffect, useReducer} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LocalizationContext from '../../../LocalizationContext';

export default function App(props) {
  const { navigation } = props;
  const { t, i18n } = React.useContext(LocalizationContext);

// https://github.com/indrajitsahu/Covid19-Tracker-Global-Project
// https://apingweb.com
  const [user, setUser] = useState('User Monkey');
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let auth = await AsyncStorage.getItem("username");
      console.log(auth)
      setUser(auth)
      // if (!JSON.parse(auth)) {
      //   setIsGuest(true)
      // }
    })();
  }, [])

  useEffect(()=>{
    axios.get('https://disease.sh/v3/covid-19/all')
    .then((res)=>{
      if (res.status == 200) {
        setState(res.data)
        setLoading(false);
      }
      else {
        alert('Error, Please try again later')
      }
    })
    .catch((err)=>{
      alert('Error, Please try again later')
    })
  },[])

  const renderItem = (item) => {
    return(
      <View style={{flexDirection:'row'}}>
        <Text style={{flex:1, backgroundColor:'yellow', padding:5}}>{item.country}</Text>
        <Text style={{flex:1, textAlign:'center', padding:5}}>{item.dailyInfectedCount}</Text>
        <Text style={{flex:1, textAlign:'center', padding:5}}>{item.dailyRecoveredCount}</Text>
        <Text style={{flex:1, textAlign:'center', padding:5}}>{item.dailyDeathCount}</Text>
      </View>
    )
  }

  if (loading) {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Loading Data....</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding:13}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={{fontSize:16, fontWeight:'bold'}}>{t('welcome.welcome')} </Text>
          <Text style={{fontSize:14}}>{user}</Text>
        </View>
        <View style={{marginTop:50}}>
          <View>
            <Text style={{fontSize:14, fontWeight:'bold'}}>{t('dashboard.title')}</Text>
            <View style={{flexDirection:'row', justifyContent:'space-around', marginVertical:20}}>
              <View>
                <Image resizeMode="contain" style={{width:50, height:50, alignSelf:'center'}} source={require('../../../assets/infected.png')}/>
                <Text style={{alignSelf:'center'}}>{t('dashboard.total_case')}</Text>
                <Text style={{alignSelf:'center'}}>{state.cases.toLocaleString()}</Text>
              </View>
              <View>
                <Image resizeMode="contain" style={{width:50, height:50, alignSelf:'center'}}source={require('../../../assets/recovered.png')}/>
                <Text style={{alignSelf:'center'}}>{t('dashboard.total_recovered')}</Text>
                <Text style={{textAlign:'center'}}>{state.recovered.toLocaleString()}</Text>
              </View>
              <View>
                <Image resizeMode="contain" style={{width:50, height:50, alignSelf:'center'}}source={require('../../../assets/skull.png')}/>
                <Text style={{alignSelf:'center'}}>{t('dashboard.total_death')}</Text>
                <Text style={{textAlign:'center'}}>{state.deaths.toLocaleString()}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={{backgroundColor:'#0177C1', padding:15, flexDirection:'row', justifyContent:'space-between', borderRadius:30}}
          onPress={()=>navigation.navigate('All_Country')}>
            <Text style={{color:'#fff', fontWeight:'bold'}}>{t('dashboard.button1')}</Text>
            <Text style={{color:'#fff', fontWeight:'bold'}}>{">"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{backgroundColor:'#0177C1', padding:15, flexDirection:'row', justifyContent:'space-between', borderRadius:30, marginTop:20}}
          onPress={()=>navigation.navigate('Sort')}>
            <Text style={{color:'#fff', fontWeight:'bold'}}>{t('dashboard.button2')}</Text>
            <Text style={{color:'#fff', fontWeight:'bold'}}>{">"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

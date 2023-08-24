import React, {useState, useEffect, useReducer} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, TextInput} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LocalizationContext from '../../../LocalizationContext';


export default function App(props) {
  const { navigation } = props;
  const { t, i18n } = React.useContext(LocalizationContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true)
    const params = new FormData();
    params.append('email', email);
    params.append('password', password);
    axios({
      method: "post",
      url: "https://apingweb.com/api/login",
      data: params,
      })
    .then(async(res)=>{
      if (res.status == 200) {
        await AsyncStorage.setItem('username', res.data.result.name)
        navigation.reset({
          index: 0,
          routes: [
            {name: 'BottomTab'},
          ],
        });
      }
      else {
        alert('Error, Please try again later')
      }
      setLoading(false);
    })
    .catch((err)=>{
      if (err.response.status == 400){
        alert('Invalid Credentials, Please check if you have an account if you do not please register')
      }
      else {
        alert('Error, Please try again later')
      }
      setLoading(false);
    })
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
      <View style={{padding:13, marginTop:50}}>
        <Text style={{fontWeight:'bold', fontSize:40, textAlign:'center'}}>{t('login.title')}</Text>
        <TextInput
        style={{backgroundColor:'#fff', borderWidth:1, width:'100%', padding:15, borderRadius:30, textAlign:'center', marginTop:20}}
        placeholder={t('login.address_placeholder')}
        onChangeText={(text)=>{
          setEmail(text)
        }}
        value={email}
        />
        <TextInput
        style={{backgroundColor:'#fff', borderWidth:1, width:'100%', padding:15, borderRadius:30, textAlign:'center', marginTop:40}}
        placeholder={t('login.password_placeholder')}
        onChangeText={(text)=>{
          setPassword(text)
        }}
        value={password}
        secureTextEntry
        />
        <TouchableOpacity style={{backgroundColor:'yellow', marginHorizontal:40, padding:15, borderRadius:30, marginTop:20, marginBottom:40}}
        onPress={login}>
          <Text style={{textAlign:'center'}}>{t('login.button')}</Text>
        </TouchableOpacity>
        <Text style={{textAlign:'center', color:'grey'}}>{t('login.no_account')}</Text>
        <TouchableOpacity style={{marginHorizontal:40, padding:15, borderRadius:30, marginTop:20}}
        onPress={()=>navigation.navigate('Register')}>
          <Text style={{textAlign:'center', textDecorationLine:'underline'}}>{t('login.register')}</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

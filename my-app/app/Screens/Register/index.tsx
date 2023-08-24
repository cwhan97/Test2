import React, {useState, useEffect, useReducer} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, TextInput} from 'react-native';
import axios from 'axios';
import LocalizationContext from '../../../LocalizationContext';

export default function App(props) {
  const { navigation } = props;
  const { t, i18n } = React.useContext(LocalizationContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const register = () => {
    setLoading(true)
    const params = new FormData();
    params.append('name', name);
    params.append('email', email);
    params.append('phone', phone);
    params.append('password', password);
    params.append('password_confirmation', confirmPassword);
    axios({
      method: "post",
      url: "https://apingweb.com/api/register",
      data: params,
    })
  .then((res) =>{
      if (res.status == 200) {
        //handle success
        alert('Register successful, kindly login with the credentials you just used to register')
        navigation.goBack()
      }
  })
  .catch((err) =>{
    //handle error
      if (err.response.status == 400){
        alert(err.response.data.errors[0])
      }
      else {
        alert('Error, Please try again later')
      }
      setLoading(false);
  });
  }

  if (loading) {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Loading Data....</Text>
      </View>
    )
  }

// https://github.com/indrajitsahu/Covid19-Tracker-Global-Project
// https://apingweb.com


  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding:13, marginTop:50}}>
        <Text style={{fontWeight:'bold', fontSize:40, textAlign:'center'}}>{t('register.title')}</Text>
        <TextInput
        style={{backgroundColor:'#fff', borderWidth:1, width:'100%', padding:15, borderRadius:30, textAlign:'center', marginTop:20}}
        placeholder={t('register.name_placeholder')}
        onChangeText={(text)=>{
          setName(text)
        }}
        value={name}
        />
        <TextInput
        style={{backgroundColor:'#fff', borderWidth:1, width:'100%', padding:15, borderRadius:30, textAlign:'center', marginTop:20}}
        placeholder={t('register.email_placeholder')}
        onChangeText={(text)=>{
          setEmail(text)
        }}
        value={email}
        />
        <TextInput
        style={{backgroundColor:'#fff', borderWidth:1, width:'100%', padding:15, borderRadius:30, textAlign:'center', marginTop:20}}
        placeholder={t('register.phone_placeholder')}
        onChangeText={(text)=>{
          setPhone(text)
        }}
        value={phone}
        />
        <TextInput
        style={{backgroundColor:'#fff', borderWidth:1, width:'100%', padding:15, borderRadius:30, textAlign:'center', marginTop:20}}
        placeholder={t('register.password_placeholder')}
        onChangeText={(text)=>{
          setPassword(text)
        }}
        value={password}
        secureTextEntry
        />
        <TextInput
        style={{backgroundColor:'#fff', borderWidth:1, width:'100%', padding:15, borderRadius:30, textAlign:'center', marginTop:20}}
        placeholder={t('register.confirm_password_placeholder')}
        onChangeText={(text)=>{
          setConfirmPassword(text)
        }}
        value={confirmPassword}
        secureTextEntry
        />
        <TouchableOpacity style={{backgroundColor:'yellow', marginHorizontal:40, padding:15, borderRadius:30, marginTop:20, marginBottom:20}}
        onPress={register}>
          <Text style={{textAlign:'center'}}>{t('register.button')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal:40, padding:15, borderRadius:30, marginTop:20}}
        onPress={()=>navigation.goBack()}>
          <Text style={{textAlign:'center', textDecorationLine:'underline'}}>{t('register.back')}</Text>
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

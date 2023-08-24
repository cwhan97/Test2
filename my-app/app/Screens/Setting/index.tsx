import React, {useState, useEffect, useReducer} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LocalizationContext from '../../../LocalizationContext';


export default function App(props) {
  const { t, i18n } = React.useContext(LocalizationContext);
  const { navigation } = props;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{backgroundColor:'#0177C1', padding:15, borderRadius:30, margin:15}}
      onPress={async()=>{
        await AsyncStorage.removeItem('username')
        navigation.reset({
          index: 0,
          routes: [
            {name: 'Login'},
          ],
        });
      }}>
        <Text style={{color:'#fff'}}>{t('setting.logout')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'#0177C1', padding:15, borderRadius:30, margin:15}}
      onPress={()=>{
        i18n.changeLanguage('en')
        alert('Language Changed to EN')
      }}>
        <Text style={{color:'#fff'}}>{t('setting.en')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'#0177C1', padding:15, borderRadius:30, margin:15}}
      onPress={()=>{
        i18n.changeLanguage('cn')
        alert('Language Changed to CN')
      }}>
        <Text style={{color:'#fff'}}>{t('setting.cn')}</Text>
      </TouchableOpacity>
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

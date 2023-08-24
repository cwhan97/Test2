import React, {useState, useEffect, useReducer} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, TextInput, Alert} from 'react-native';
import axios from 'axios';
import ImageLoad from 'react-native-image-placeholder';
import LocalizationContext from '../../../LocalizationContext';

export default function App(props) {

// https://github.com/indrajitsahu/Covid19-Tracker-Global-Project
// https://apingweb.com
  const { navigation } = props;
  const { t, i18n } = React.useContext(LocalizationContext);
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filterData, setFilterData] = useState([])

  useEffect(()=>{
    axios.get('https://disease.sh/v3/covid-19/countries')
    .then((res)=>{
      if (res.status == 200) {
        const itemList = res.data
        .map((data, index) => {
          if (index >= 0 && index < 50) {
            return <li key={index}>{data}</li>;
          }
          return null;
        })
        .slice(0, 49);

        setState(itemList)
        setFilterData(itemList)
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
      <TouchableOpacity style={{marginBottom:10, padding:15, borderRadius:30, width:'50%'}}
      onPress={()=>navigation.navigate('Country_Detail', item)}>
        <ImageLoad
          style={{ width: 100, height: 100, alignSelf:'center'}}
          loadingStyle={{ size: 'large', color: 'grey' }}
          source={{ uri: item.props.children.countryInfo.flag }}
          resizeMode="contain"
        />
        <Text style={{flex:1, color:'#000', textAlign:'center'}}>{item.props.children.country}</Text>
      </TouchableOpacity>
    )
  }

  useEffect(()=>{
    if (error){
      Alert.alert(
        'Warning',
        'No country with input text',
        [{
            text: 'OK',
            onPress: async () => {
              setError(false);
            }
        }]
      );
    }
  },[error])


  const searchByCountry = (text) => {
    let result = [];

      state.filter(state => {
        if (state.props.children.country.includes(text)){
            result.push(state)
            setFilterData(result)
        }
      }
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
        <TextInput style={{borderWidth:1, borderRadius:30, height:50, padding:15, marginBottom:10}}
        placeholder={t('all_country.placeholder')}
        onChangeText={(text)=>{
          searchByCountry(text)
        }}
        />
        <View>
          <FlatList
          style={{marginBottom:80}}
          contentContainerStyle={{justifyContent:'space-around'}}
          bounces={false}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={()=><Text style={{textAlign:'center'}}>{t('sort.empty_flatlist')}</Text>}
          keyExtractor={(item,index)=>index.toString()}
          data={filterData}
          renderItem={({ item, index }) => (
            renderItem(item, index)
          )}
          initialNumToRender={50}
          numColumns={2}
          />
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

import React, {useState, useEffect, useReducer} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, TextInput, Alert} from 'react-native';
import LocalizationContext from '../../../LocalizationContext';

export default function App() {

  const { t, i18n } = React.useContext(LocalizationContext);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(['Malaysia', 'Afghanistan', 'New Zealand', 'USA', 'Singapore', 'China']);
  // let sorted = state.sort();

  const [filterData, setFilterData] = useState([]);

  useEffect(()=>{
    if (loading){
      state.sort();
      setLoading(false);
    }
  },[loading])


  const renderItem = (item) => {
    return(
      <TouchableOpacity style={{flexDirection:'row', backgroundColor:'#0177C1', marginBottom:10, padding:15, borderRadius:30}}>
        <Text style={{flex:1, color:'#fff'}}>{item}</Text>
        <Text style={{color:'#fff', fontSize:16}}>{">"}</Text>
      </TouchableOpacity>
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
        <View>
          <TouchableOpacity style={{padding:15, backgroundColor:'grey', borderRadius:30, marginBottom:20}} onPress={()=>{
            setLoading(true);
          }}>
            <Text style={{color:'#fff'}}>{t('sort.button')}</Text>
          </TouchableOpacity>
          <FlatList
          contentContainerStyle={{justifyContent:'center'}}
          bounces={false}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={()=><Text style={{textAlign:'center'}}>{t('sort.empty_flatlist')}</Text>}
          keyExtractor={(item,index)=>index.toString()}
          data={state}
          renderItem={({ item, index }) => (
            renderItem(item, index)
          )}
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

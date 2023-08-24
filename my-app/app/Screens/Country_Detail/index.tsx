import React, {useState, useEffect, useReducer} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, TextInput, Alert, ScrollView} from 'react-native';
import ImageLoad from 'react-native-image-placeholder';
import moment from 'moment';
import LocalizationContext from '../../../LocalizationContext';

export default function App(props) {

  const { navigation } = props;
  const { t, i18n } = React.useContext(LocalizationContext);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{padding:13}} bounces={false} showsVerticalScrollIndicator={false}>
      <View>
        <ImageLoad
          style={{ width: 200, height: 200, alignSelf:'center'}}
          loadingStyle={{ size: 'large', color: 'grey' }}
          source={{ uri: props.route.params.props.children.countryInfo.flag}}
          resizeMode="contain"
        />
        <View style={{marginBottom:15}}>
          <View style={{flexDirection:'row', backgroundColor:'yellow', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.country_name')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.country}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'#03e3fc', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.continent')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.continent}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'yellow', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.active')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.active.toLocaleString()}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'#03e3fc', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.activepermillion')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.activePerOneMillion.toLocaleString()}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'yellow', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.cases')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.cases.toLocaleString()}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'#03e3fc', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.casespermillion')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.casesPerOneMillion.toLocaleString()}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'yellow', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.critical')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.critical.toLocaleString()}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'#03e3fc', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.criticalpermillion')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.criticalPerOneMillion.toLocaleString()}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'yellow', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.death')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.deaths.toLocaleString()}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'#03e3fc', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.deathpermillion')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.deathsPerOneMillion.toLocaleString()}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'yellow', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.onecaseperpeople')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.oneCasePerPeople.toLocaleString()}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'#03e3fc', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.onedeathperpeople')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.oneDeathPerPeople.toLocaleString()}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'yellow', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.onetestperpeople')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.oneTestPerPeople.toLocaleString()}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'#03e3fc', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.population')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.population.toLocaleString()}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'yellow', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.recovered')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.recovered.toLocaleString()}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'#03e3fc', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.recoveredpermillion')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.recoveredPerOneMillion.toLocaleString()}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'yellow', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.test')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.tests.toLocaleString()}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'#03e3fc', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.testpermillion')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.testsPerOneMillion.toLocaleString()}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'yellow', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.todaycase')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.todayCases.toLocaleString()}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'#03e3fc', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.todaydeaths')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.todayDeaths.toLocaleString()}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'yellow', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.todayrecovered')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.todayRecovered.toLocaleString()}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'#03e3fc', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.testpermillion')}</Text>
            <Text style={{flex:1}}>{props.route.params.props.children.testsPerOneMillion.toLocaleString()}</Text>
          </View>
          <View style={{flexDirection:'row', backgroundColor:'yellow', padding:10}}>
            <Text style={{fontWeight:'bold', flex:1}}>{t('country_detail.updatedat')}</Text>
            <Text style={{flex:1}}>{moment(props.route.params.props.children.updated).format('MMMM Do YYYY, h:mm:ss a')}</Text>
          </View>
        </View>
      </View>
      </ScrollView>
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

import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Alert, AsyncStorage, Linking } from 'react-native';
import LocalizationProvider from './LocalizationProvider';

import Route from './navigation';

export default function App() {

    return (
      <SafeAreaProvider>
        <LocalizationProvider>
          <Route/>
          <StatusBar style='dark'/>
        </LocalizationProvider>
      </SafeAreaProvider>
    );
}

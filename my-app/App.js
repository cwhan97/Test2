import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Alert, AsyncStorage, Linking } from 'react-native';

import Route from './navigation';

export default function App() {

    return (
      <SafeAreaProvider>
            <Route/>
            <StatusBar style='dark'/>
      </SafeAreaProvider>
    );
}

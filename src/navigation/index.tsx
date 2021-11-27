import React from 'react';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  COUNTRY_LIST_SCREEN,
  COUNTRY_DETAIL_SCREEN,
  LANGUAGE_COUNTRY_SCREEN,
} from './screenKey';
import {CountryDetailScreen, CountryListScreen} from '~/screens/Country';
import {LanguageScreen} from '~/screens/Language';

const Stack = createNativeStackNavigator();

const HIDE_HEADER = {headerShown: true, gestureEnabled: false};

const StackRoot = () => {
  return (
    <Stack.Navigator screenOptions={HIDE_HEADER}>
      <Stack.Screen name={COUNTRY_LIST_SCREEN} component={CountryListScreen} />
      <Stack.Screen
        name={COUNTRY_DETAIL_SCREEN}
        component={CountryDetailScreen}
        initialParams={{country: null}}
      />
      <Stack.Screen
        name={LANGUAGE_COUNTRY_SCREEN}
        component={LanguageScreen}
        initialParams={{language: null}}
      />
    </Stack.Navigator>
  );
};

export default StackRoot;

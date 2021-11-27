import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
import 'react-native-gesture-handler';

import {styles} from './App.styles';

import StackRoot from '~/navigation';
import {apolloClient} from '~/services';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <SafeAreaView style={styles.root}>
        <NavigationContainer>
          <StackRoot />
        </NavigationContainer>
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default App;

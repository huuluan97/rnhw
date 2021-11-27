import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import {LanguageModel} from '~/models/language';
import {DATA_COUNTRY_TEMP} from '~/data';
import {styles} from './styles';
import {CountryModel} from '~/models/country';
import {COUNTRY_LIST_SCREEN} from '~/navigation/screenKey';

type ParamList = {
  LANGUAGE_SCREEN: {
    language: LanguageModel;
  };
};

export const LanguageScreen = () => {
  const route = useRoute<RouteProp<ParamList, 'LANGUAGE_SCREEN'>>();
  const navigation = useNavigation<any>();
  const {language} = route.params;
  const countries = DATA_COUNTRY_TEMP;

  function onNavigateLanguage() {
    navigation.navigate(COUNTRY_LIST_SCREEN);
  }

  return (
    <ScrollView contentContainerStyle={styles.root} bounces={false}>
      <View style={styles.root}>
        <Text style={styles.title}>{language?.name}</Text>
        <View style={styles.content}>
          <View style={styles.subContent}>
            <Text style={styles.text}>Code</Text>
            <Text style={styles.text}>{language?.code}</Text>
          </View>
          <View style={styles.subContent}>
            <Text style={styles.text}>Countries</Text>
            <View style={styles.listText}>
              {countries.map((item: CountryModel, index: number) => (
                <Pressable
                  key={`${item.code}-${index}`}
                  onPress={() => onNavigateLanguage()}>
                  <TextCountry name={item.name} />
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

function TextCountry(props: any) {
  const {name} = props;
  return <Text style={styles.country}>{name}</Text>;
}

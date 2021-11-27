import React, {useMemo} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useQuery} from '@apollo/client';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import {CountryModel} from '~/models/country';
import {Loading} from '~/components';
import {FETCH_COUNTRY_DETAIL} from './fragments';
import {ScrollView} from 'react-native-gesture-handler';
import {LanguageModel} from '~/models/language';
import {LANGUAGE_COUNTRY_SCREEN} from '~/navigation/screenKey';
import {styles} from './styles';

type ParamList = {
  COUNTRY_DETAIL_SCREEN: {
    country: CountryModel;
  };
};

export const CountryDetailScreen = () => {
  const route = useRoute<RouteProp<ParamList, 'COUNTRY_DETAIL_SCREEN'>>();
  const navigation = useNavigation<any>();
  const {country} = route.params;
  const options = {
    variables: {code: country.code},
  };
  const {loading, data} = useQuery(FETCH_COUNTRY_DETAIL, options);

  const dataMemo: CountryModel = useMemo(() => {
    if (data) {
      return data.country;
    }
    return {};
  }, [data]);

  function onNavigateLanguage(language: LanguageModel) {
    navigation.navigate(LANGUAGE_COUNTRY_SCREEN, {language});
  }

  if (loading) return <Loading loading={loading} isFullScreen />;

  return (
    <ScrollView contentContainerStyle={styles.root} bounces={false}>
      <View style={styles.root}>
        <Text style={styles.logo}>{dataMemo?.emoji}</Text>
        <Text style={styles.title}>{dataMemo?.name}</Text>
        <View style={styles.content}>
          <View style={styles.subContent}>
            <Text style={styles.text}>Code</Text>
            <Text style={styles.text}>{dataMemo?.code}</Text>
          </View>
          <View style={styles.subContent}>
            <Text style={styles.text}>Calling</Text>
            <Text style={styles.text}>{dataMemo?.phone}</Text>
          </View>
          <View style={styles.subContent}>
            <Text style={styles.text}>Capital</Text>
            <Text style={styles.text}>{dataMemo?.capital}</Text>
          </View>
          <View style={styles.subContent}>
            <Text style={styles.text}>Languages</Text>
            <View style={styles.listText}>
              {dataMemo.languages.map((item: LanguageModel, index: number) => (
                <Pressable
                  key={`${item.code}-${index}`}
                  onPress={() => onNavigateLanguage(item)}>
                  <TextLanguage name={item.name} />
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

function TextLanguage(props: any) {
  const {name} = props;
  return <Text style={styles.language}>{name}</Text>;
}

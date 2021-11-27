import React, {Fragment, useMemo} from 'react';
import {View, Text, FlatList, RefreshControl} from 'react-native';
import {useQuery} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';

import {CountryItem, Loading} from '~/components';

import {FETCH_ALL_COUNTRY_LIST} from './fragments';
import {CountryListModel, CountryModel} from '~/models/country';
import {COUNTRY_DETAIL_SCREEN} from '~/navigation/screenKey';
import {styles} from './styles';

export const CountryListScreen = () => {
  const navigation = useNavigation<any>();
  const {loading, data, refetch} = useQuery<CountryListModel>(
    FETCH_ALL_COUNTRY_LIST,
  );

  const dataMemo: CountryModel[] = useMemo(() => {
    if (data) {
      return data.countries;
    }
    return [];
  }, [data]);

  function renderItem({item}: {item: CountryModel}) {
    return <CountryItem data={item} onNavigateDetail={onNavigateDetail} />;
  }

  function onNavigateDetail(country: CountryModel) {
    navigation.navigate(COUNTRY_DETAIL_SCREEN, {country});
  }

  if (loading) return <Loading loading={loading} isFullScreen />;

  return (
    <FlatList
      ListHeaderComponent={<HeaderCountryListScreen />}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={() => refetch()} />
      }
      style={styles.root}
      data={dataMemo}
      keyExtractor={(item, index) => `${item.code}-${index}`}
      renderItem={renderItem}
      onEndReachedThreshold={0.5}
      removeClippedSubviews
    />
  );
};

function HeaderCountryListScreen() {
  return (
    <Fragment>
      <View style={styles.header} />
      <Text style={styles.title}>List of countries</Text>
    </Fragment>
  );
}

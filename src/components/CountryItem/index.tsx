import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {CountryModel} from '~/models/country';
import {styles} from './styles';

type Props = {
  data: CountryModel;
  onNavigateDetail(data: CountryModel): void;
};

const CountryItem: React.FC<Props> = (props: Props) => {
  const {data, onNavigateDetail} = props;
  return (
    <Pressable onPress={() => onNavigateDetail(data)}>
      <View style={styles.root}>
        <View style={styles.container}>
          <Text style={styles.logo}>{data.emoji}</Text>
          <View style={styles.subContainer}>
            <Text style={styles.name}>{data.name}</Text>
            <Text>{data.capital}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CountryItem;

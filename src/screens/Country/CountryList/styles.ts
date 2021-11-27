import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '~/utils';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.mint,
  },
  header: {
    height: scale(204),
    backgroundColor: colors.pink,
    borderBottomLeftRadius: scale(20),
  },
  title: {
    marginHorizontal: scale(14),
    marginVertical: scale(20),
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.gray,
  },
});

import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '~/utils';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.primary.white,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.gray,
    textAlign: 'center',
    marginTop: scale(14),
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    marginTop: scale(24),
    paddingHorizontal: scale(8),
  },
  subContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: scale(4),
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
    color: colors.gray_black,
  },
  country: {
    color: colors.blue,
    marginBottom: scale(4),
    textDecorationLine: 'underline',
  },
  listText: {alignItems: 'flex-end'},
});

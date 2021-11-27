import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '~/utils';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: scale(14),
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.primary.white,
    paddingHorizontal: scale(12),
    paddingVertical: scale(4),
    marginBottom: scale(8),
    borderRadius: scale(4),
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  subContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: scale(8),
  },
  logo: {
    fontSize: scale(30),
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.gray,
  },
});

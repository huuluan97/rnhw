import React from 'react';
import {StyleSheet, ViewStyle, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import {colors} from '~/utils';

export interface Style {
  activityIndicatorWrapper: ViewStyle;
}

export interface Props {
  loading: boolean;
  isFullScreen?: boolean;
}

function Loading(prop: Props) {
  const {loading = false, isFullScreen = true} = prop;
  if (!isFullScreen) {
    return (
      <ActivityIndicator
        color={colors.red_light}
        size="large"
        style={styles.center}
      />
    );
  }
  return (
    <Modal
      animationInTiming={5}
      backdropTransitionInTiming={5}
      animationOutTiming={5}
      backdropTransitionOutTiming={5}
      isVisible={loading}
      style={styles.wrapLoading}>
      <ActivityIndicator
        color={colors.red_light}
        size="large"
        style={styles.activityIndicatorWrapper}
      />
    </Modal>
  );
}

export default React.memo(Loading);

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    alignSelf: 'center',
  },

  activityIndicatorWrapper: {
    backgroundColor: colors.transparent,
    height: 110,
    width: 110,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 8,
  },
  wrapLoading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

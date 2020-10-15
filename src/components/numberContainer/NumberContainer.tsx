import React from 'react';
import { View, StyleSheet } from 'react-native';
import { appColors } from '../../constants/colors';
import BodyText from '../bodyText/BodyText';

const NumberContainer = (props: any) => {
  return (
    <View style={styles.container}>
      <BodyText style={styles.number}>{props.children}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: appColors.second,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: appColors.second,
    fontSize: 22,
  },
});

export default NumberContainer;

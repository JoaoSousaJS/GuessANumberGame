import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { appColors } from '../../constants/colors';

interface IHeaderInterface {
  title: string;
}

export const Header = (props: IHeaderInterface) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 26,
    backgroundColor: appColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'open-sans-bold',
  },
});

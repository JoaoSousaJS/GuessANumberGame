import React from 'react';
import { View, StyleSheet, Button, Image, Text } from 'react-native';
import BodyText from '../components/bodyText/BodyText';
import MainButton from '../components/mainButton/MainButton';
import { appColors } from '../constants/colors';

// import { Container } from './styles';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The game is over</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/success.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{' '}
          <Text style={styles.highlight}>{props.roundsNumber} </Text>
          rounds to guess number{' '}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>

      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
  },
  highlight: {
    color: appColors.primary,
    fontFamily: 'open-sans-bold',
  },
  resultContainer: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default GameOverScreen;

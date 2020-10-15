import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Text,
} from 'react-native';
import BodyText from '../components/bodyText/BodyText';

import Card from '../components/card/Card';
import Input from '../components/input/Input';
import MainButton from '../components/mainButton/MainButton';
import NumberContainer from '../components/numberContainer/NumberContainer';
import { appColors } from '../constants/colors';

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<number | undefined>();

  const numberInputHandler = (inputText: string) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }],
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>You selected </BodyText>
        <View>
          <NumberContainer>{selectedNumber}</NumberContainer>
          <MainButton onPress={() => props.onStartGame(selectedNumber)}>
            START GAME
          </MainButton>
        </View>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new Game</Text>
        <Card style={styles.inputContainer}>
          <BodyText>Select a Number</BodyText>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttons}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={appColors.primary}
              />
            </View>
            <View style={styles.buttons}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={appColors.second}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'open-sans-bold',
  },
  buttons: {
    width: '50%',
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default StartGameScreen;

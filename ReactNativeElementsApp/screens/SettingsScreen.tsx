import { Keyboard, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';

import React from 'react';
import { View, Text } from '../components/Themed';
import { Button } from '@rneui/themed';
import Colors from '../constants/Colors';


export default function SettingsScreen() {
  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} touchSoundDisabled={true}>
    <ScrollView contentContainerStyle={styles.containerContent}>
      <View style={styles.container}>
        <Text style={styles.title}>These would be settings</Text>
        <View style={{ position: 'absolute', alignItems: 'center', bottom: 100, left: 0, right: 0 }}>

          <Button
            title="LOG OUT"
            buttonStyle={{
              backgroundColor: 'transparent',
              borderColor: Colors.rosemarkPurple,
              borderWidth: 3,
              borderRadius: 30,
              paddingVertical: 10,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
              borderRadius: 30,
            }}
            titleStyle={{ fontWeight: 'bold' }}
          />

          <Button
            title="LOG OUT"
            buttonStyle={{
              backgroundColor: Colors.rosemarkPurple,
              borderRadius: 30,
              paddingVertical: 10,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
              borderRadius: 30,
            }}
            titleStyle={{ fontWeight: 'bold' }}
          />

          <Button
            title="LOG OUT"
            buttonStyle={{
              backgroundColor: Colors.rosemarkPurple,
              borderRadius: 30,
              paddingVertical: 10,
              borderWidth: 2,
              borderColor: 'white',
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
              borderRadius: 30,
            }}
            titleStyle={{ fontWeight: 'bold' }}
          />
        </View>
      </View>
    </ScrollView>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  containerContent: {
    // alignItems: 'center',
    // justifyContent: 'center',
    flex: 1,
  },
  container: {
    padding: 10,
    flex: 1,
  },
  margin: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

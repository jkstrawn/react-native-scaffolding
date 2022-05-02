import { Keyboard, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';

import { Button, TextInput, Text } from 'react-native-paper';
import React from 'react';
import { View } from '../components/Themed';

import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import MyComponent from '../components/BottomNavigation';

export default function SettingsScreen() {
  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} touchSoundDisabled={true}>
    <ScrollView contentContainerStyle={styles.containerContent}>
      <View style={styles.container}>
        <Text style={styles.title}>These would be settings</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/SettingsScreen.tsx" />
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

import { Keyboard, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';

import { Button, TextInput, Text } from 'react-native-paper';
import React from 'react';
import { View } from '../components/Themed';

import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import MyComponent from '../components/BottomNavigation';

export default function CalendarScreen() {
  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} touchSoundDisabled={true}>
    <ScrollView>
      <View style={styles.containerContent}>

        <TextInput
          label="Email"
          value={""}
          onChangeText={text => console.log(text)}
          autoComplete={false}
          style={styles.margin}
        />
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')} style={styles.margin}>
          Press me
        </Button>

        <Card>
          <Card.Title title="Card Title" subtitle="Card Subtitle" />
          <Card.Content>
            <Title>Is this a calendar?</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </Card>
        <Text style={styles.title}>Calendar</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
      </View>
    </ScrollView>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  containerContent: {
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
  },
  container: {
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

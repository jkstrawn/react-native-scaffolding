import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { View, Text } from "../../components/Themed";
import { Card } from '@rneui/themed';

export default class ShiftOffersScreen extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return <ScrollView contentContainerStyle={styles.containerContent}>
      <View style={styles.container}>
        <Card containerStyle={{ marginTop: 15 }}>
          <Card.Title>HHA: Elliot Hammerfold</Card.Title>
          <Card.Divider />
          <Text style={styles.fonts}>
            Wed, Apr 20 2022, 1pm-7pm
          </Text>
        </Card>
        <Card containerStyle={{ marginTop: 15 }}>
          <Card.Title>HHA: Redula Clemens</Card.Title>
          <Card.Divider />
          <Text style={styles.fonts}>
            Wed, Apr 20 2022, 8pm-11pm
          </Text>
        </Card>
      </View>
    </ScrollView>
  }
}

const styles = StyleSheet.create({
  containerContent: {
    // alignItems: 'center',
    // justifyContent: 'center',
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
    color: 'black',
    textAlign: 'center',
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
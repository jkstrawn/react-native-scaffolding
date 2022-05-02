import { Card } from "@rneui/themed";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { View, Text } from "../../components/Themed";

export default class NotificationsScreen extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return <ScrollView contentContainerStyle={styles.containerContent}>
      <View style={styles.container}>
        <Card containerStyle={{ marginTop: 15 }}>
          <Card.Title>Tue Apr 19th - Wed Apr 20th</Card.Title>
          <Card.Divider />
          <Text style={styles.fonts}>
            Flora's birthday is coming up, so let's get together to plan a party for her to celebrate this auspicious time.
          </Text>
        </Card>
        <Card containerStyle={{ marginTop: 15 }}>
          <Card.Title>Tue Apr 19th - Wed Apr 20th</Card.Title>
          <Card.Divider />
          <Text style={styles.fonts}>
            Please note that Mr. Andrews is allergic to ladybugs, so be careful when going for walks with him.
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
  container: {
    padding: 10,
    flex: 1,
  },
  margin: {
    marginBottom: 10,
  },
  fonts: {
    marginBottom: 8,
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
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
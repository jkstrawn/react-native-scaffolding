import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { View, Text } from "../../components/Themed";
import { Avatar, Card, Title, Paragraph, Divider } from 'react-native-paper';

export default class ShiftOffersScreen extends React.Component<{}, {}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return <ScrollView contentContainerStyle={styles.containerContent}>
      <View style={styles.container}>
        <Card style={{ marginTop: 15 }}>
          <Card.Title title="HHA: Elliot Hammerfold" />
          <Divider />
          <Card.Content>
            <Title>Wed, Apr 20 2022, 1pm-7pm</Title>
          </Card.Content>
        </Card>
        <Card style={{ marginTop: 15 }}>
          <Card.Title title="HHA: Redula Clemens" />
          <Divider />
          <Card.Content>
            <Title>Wed, Apr 20 2022, 8pm-11pm</Title>
          </Card.Content>
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
    padding: 20,
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
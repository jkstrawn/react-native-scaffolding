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
                <Text style={styles.title}>These would be notifications</Text>
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
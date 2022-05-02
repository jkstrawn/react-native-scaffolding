import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { View, Text } from "../../components/Themed";

export default class ShiftAlertsScreen extends React.Component<{}, {}> {
    constructor(props: Readonly<{}>) {
        super(props);
    }

    render() {
        return <ScrollView contentContainerStyle={styles.containerContent}>
            <View style={styles.container}>
                <Text style={styles.title}>You have no shift alerts to view</Text>
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
      textAlign: 'center',
      marginTop: 20,
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });
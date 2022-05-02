import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { View, Text, Button, TextInput } from "../components/Themed";
import {
  createStackNavigator,
  StackNavigationOptions,
  StackScreenProps,
} from '@react-navigation/stack';
import { RootStackParamList } from "../types";

export default class SignInScreen extends React.Component<StackScreenProps<RootStackParamList>, {}> {
  // constructor(props: Readonly<StackScreenProps<RootStackParamList>>) {
  //   super(props);
  // }

  render() {
    return <View style={styles.containerContent}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <TextInput placeholder="Username" icon={{ type: 'font-awesome', name: 'comment', color: 'white', style: { width: 40 } }} />
        <TextInput placeholder="Password" icon={{ type: 'font-awesome', name: 'lock', color: 'white', style: { width: 40 } }} />
        <View style={{ alignItems: 'center' }}>
          <Button title="Sign In" onPress={() => this.props.navigation.replace('Root')} />
        </View>
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  containerContent: {
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 100,
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
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
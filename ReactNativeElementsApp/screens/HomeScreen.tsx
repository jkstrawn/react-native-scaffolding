import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Card } from '@rneui/themed';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Today'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Good Morning, Velvet</Text>
      <Card containerStyle={{ marginTop: 15 }}>
        <Card.Title>HHA: John Andrews</Card.Title>
        <Card.Divider />
        <Text style={styles.fonts}>
          Wed, Apr 20 2022, 1pm-7pm
        </Text>
      </Card>
      <Card containerStyle={{ marginTop: 15 }}>
        <Card.Title>HHA: Flora Bosley</Card.Title>
        <Card.Divider />
        <Text style={styles.fonts}>
          Wed, Apr 20 2022, 8pm-11pm
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  fonts: {
    marginBottom: 8,
    color: 'black',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

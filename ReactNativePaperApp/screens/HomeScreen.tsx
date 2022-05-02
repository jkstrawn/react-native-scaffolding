import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Avatar, Card, Title, Paragraph, Divider } from 'react-native-paper';

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Good Morning, Velvet</Text>
      <Card style={{ marginTop: 15 }}>
        <Card.Title title="HHA: John Andrews" />
        <Divider />
        <Card.Content>
          <Title>Wed, Apr 20 2022, 1pm-7pm</Title>
        </Card.Content>
      </Card>
      <Card style={{ marginTop: 15 }}>
        <Card.Title title="HHA: Flora Bosley" />
        <Divider />
        <Card.Content>
          <Title>Wed, Apr 20 2022, 8pm-11pm</Title>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
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

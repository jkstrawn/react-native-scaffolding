import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import type { ParamListBase } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../../constants/Colors';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import NotificationsScreen from './NotificationsScreen';
import ShiftAlertsScreen from './ShiftAlertsScreen';
import ShiftOffersScreen from './ShiftOffersScreen';

type MaterialTopTabParams = {
  Albums: undefined;
  Contacts: undefined;
  Chat: undefined;
};

const MaterialTopTabs = createMaterialTopTabNavigator<MaterialTopTabParams>();

export default function MessagesScreen({
  navigation,
}: StackScreenProps<ParamListBase>) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      cardStyle: { flex: 1 },
    });
  }, [navigation]);

  return (
    <MaterialTopTabs.Navigator screenOptions={{
      tabBarPressColor: 'powderblue', tabBarActiveTintColor: 'white',
      // tabBarInactiveTintColor: "black"
      tabBarStyle: {
        backgroundColor: '#222'
      },
      tabBarIndicatorStyle: { backgroundColor: "white" }
    }}>
      <MaterialTopTabs.Screen
        name="Chat"
        component={ShiftOffersScreen}
        options={{ title: 'Offers' }}
      />
      <MaterialTopTabs.Screen
        name="Contacts"
        component={NotificationsScreen}
        options={{ title: 'Notifications' }}
      />
      <MaterialTopTabs.Screen
        name="Albums"
        component={ShiftAlertsScreen}
        options={{ title: 'Alerts' }}
      />
    </MaterialTopTabs.Navigator>
  );
}

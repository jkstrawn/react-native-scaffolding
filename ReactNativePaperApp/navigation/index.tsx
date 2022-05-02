/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import MessagesScreen from '../screens/Messages/MessagesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SignInScreen from '../screens/SignInScreen';
import { StackScreenProps } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

// function getHeaderTitle(route: RouteProp<RootStackParamList>): string {
//   console.log(route.key, route.name, route.params, route.path, route["state"]);

//   return "test";
// }

let routeChange: (index: number) => void;

interface State {
  routeIndex: number;
}

const headerTitles = [
  "Today", "Calendar", "Messages", "Settings"
];

class RootNavigator extends React.Component<{}, State> {
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      routeIndex: 0,
    };
  }

  componentDidMount() {
    routeChange = (index: number) => {
      this.setState({ routeIndex: index });
    }
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Root" component={MaterialBottomTabsScreen} options={({ route }) => ({
          headerShown: true,
          title: headerTitles[this.state.routeIndex],
          headerBackground: () => <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0.8, y: 1 }}
            colors={[Colors.rosemarkPurple, Colors.rosemarkPurpleMedium, Colors.rosemarkPurpleDark]}
            // colors={['#4c669f', '#3b5998', '#192f6a']}
            style={{
              flex: 1
              // flex: 1, borderBottomWidth: 1, borderBottomColor: '#aaa'
            }}
          />
        })} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    );
  }

}


/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

type MaterialBottomTabParams = {
  TabStack: undefined;
  TabAlbums: undefined;
  TabContacts: undefined;
  TabChat: undefined;
};

const MaterialBottomTabs =
  createMaterialBottomTabNavigator<MaterialBottomTabParams>();

class MaterialBottomTabsScreen extends React.Component<StackScreenProps<MaterialBottomTabParams>, {}> {
  // componentDidMount() {

  //   const unsubscribe = this.props.navigation.addListener('tabPress', (e) => {
  //     // Prevent default behavior

  //     console.log("tab press0");
  //   });
  // }

  render() {
    return <MaterialBottomTabs.Navigator barStyle={styles.tabBar} screenOptions={{
      title: "test",
      tabBarColor: Colors.rosemarkPurpleDark,
    }}
      activeColor={"white"}
      inactiveColor='white'
    >
      <MaterialBottomTabs.Screen
        name="TabStack"
        options={{
          tabBarLabel: 'Today',
          tabBarIcon: 'home',
          // tabBarColor: Colors.rosemarkPurple,
        }}
        component={HomeScreen}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            routeChange(0);
          },
        })}
      />
      <MaterialBottomTabs.Screen
        name="TabChat"
        component={CalendarScreen}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: 'calendar',
          // tabBarColor: Colors.rosemarkPurpleMedium,
        }}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            routeChange(1);
          },
        })}
      />
      <MaterialBottomTabs.Screen
        name="TabContacts"
        component={MessagesScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: 'format-list-bulleted',
          // tabBarColor: Colors.rosemarkPurpleDark,
          tabBarBadge: true,
        }}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            routeChange(2);
          },
        })}
      />
      <MaterialBottomTabs.Screen
        name="TabAlbums"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: 'account-cog',
          // tabBarColor: Colors.rosemarkPurpleDark,
        }}
        listeners={({ navigation, route }) => ({
          tabPress: e => {
            routeChange(3);
          },
        })}
      />
    </MaterialBottomTabs.Navigator>
  }
}
// const unsubscribe = this.props.navigation.addListener('tabPress', (e) => {
//   // Prevent default behavior

//   console.log("tab press0");
// });
// console.log("load");
// function MaterialBottomTabsScreen() {
//   return (
//     <MaterialBottomTabs.Navigator barStyle={styles.tabBar} screenOptions={{
//       title: "test"
//     }}>
//       <MaterialBottomTabs.Screen
//         name="TabStack"
//         options={{
//           tabBarLabel: 'Today',
//           tabBarIcon: 'home',
//           tabBarColor: '#C9E7F8',
//         }}
//         component={HomeScreen}
//       />
//       <MaterialBottomTabs.Screen
//         name="TabChat"
//         component={CalendarScreen}
//         options={{
//           tabBarLabel: 'Calendar',
//           tabBarIcon: 'calendar',
//           tabBarColor: '#9FD5C9',
//         }}
//       />
//       <MaterialBottomTabs.Screen
//         name="TabContacts"
//         component={MessagesScreen}
//         options={{
//           tabBarLabel: 'Messages',
//           tabBarIcon: 'format-list-bulleted',
//           tabBarColor: '#F7EAA2',
//           tabBarBadge: true,
//         }}
//       />
//       <MaterialBottomTabs.Screen
//         name="TabAlbums"
//         component={SettingsScreen}
//         options={{
//           tabBarLabel: 'Settings',
//           tabBarIcon: 'account-cog',
//           tabBarColor: '#FAD4D6',
//         }}
//       />
//     </MaterialBottomTabs.Navigator>
//   );
// }

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
  },
});


//  const Tab = createMaterialBottomTabNavigator();

//  function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Today"
//       activeColor="#e91e63"
//       barStyle={{ backgroundColor: 'tomato' }}
//     >
//       <Tab.Screen
//         name="Today"
//         component={TabOneScreen}
//         options={{
//           tabBarLabel: 'Today',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="home" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Calendar"
//         component={TabTwoScreen}
//         options={{
//           tabBarLabel: 'Calendar',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="calendar" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Messages"
//         component={TabTwoScreen}
//         options={{
//           tabBarLabel: 'Messages',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Settings"
//         component={TabTwoScreen}
//         options={{
//           tabBarLabel: 'Settings',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="account-cog" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
// const BottomTab = createBottomTabNavigator<RootTabParamList>();

// function BottomTabNavigator() {
//   const colorScheme = useColorScheme();

//   return (
//     <BottomTab.Navigator
//       initialRouteName="TabOne"
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme].tint,
//       }}>
//       <BottomTab.Screen
//         name="TabOne"
//         component={TabOneScreen}
//         options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
//           title: 'Tab One',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//           headerRight: () => (
//             <Pressable
//               onPress={() => navigation.navigate('Modal')}
//               style={({ pressed }) => ({
//                 opacity: pressed ? 0.5 : 1,
//               })}>
//               <FontAwesome
//                 name="info-circle"
//                 size={25}
//                 color={Colors[colorScheme].text}
//                 style={{ marginRight: 15 }}
//               />
//             </Pressable>
//           ),
//         })}
//       />
//       <BottomTab.Screen
//         name="TabTwo"
//         component={TabTwoScreen}
//         options={{
//           title: 'Tab Two',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// }

// /**
//  * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
//  */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
// }

/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, NavigationProp, ParamListBase, StackActionHelpers, StackNavigationState } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Animated, ColorSchemeName, Pressable, RegisteredStyle, StyleSheet, ViewStyle } from 'react-native';
import { View, Text } from '../components/Themed';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import { Button } from '@rneui/base';
import LinkingConfiguration from './LinkingConfiguration';
import { BottomFabBar } from 'rn-wave-bottom-bar';
import HomeScreen from '../screens/HomeScreen';
import MessagesScreen from '../screens/Messages/MessagesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SignInScreen from '../screens/SignInScreen';
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

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

const getTabBarIcon =
  (name: any) =>
    ({ color, size }: { color: string; size: number }) =>
      <MaterialCommunityIcons name={name} color={color} size={size} />;

const Tab = createBottomTabNavigator<RootTabParamList>();



function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#373737',
        tabBarActiveBackgroundColor: '#272727',
        // tabBarActiveTintColor: '#3b525e',
        // tabBarActiveBackgroundColor: '#24333b',
        // tabBarActiveTintColor: Colors.rosemarkPurpleMedium,
        // tabBarActiveBackgroundColor: Colors.rosemarkPurpleDark,
        tabBarInactiveTintColor: 'white',
        tabBarInactiveBackgroundColor: 'white',
        tabBarShowLabel: true,
        headerShown: true,
        headerStyle: { backgroundColor: Colors.rosemarkPurple, borderBottomWidth: 2, borderBottomColor: '#222' },
        headerBackground: ({ style }) => <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0.8, y: 1 }}
          colors={[Colors.rosemarkPurple, Colors.rosemarkPurpleMedium, Colors.rosemarkPurpleDark]}
          // colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{
            flex: 1
            // flex: 1, borderBottomWidth: 1, borderBottomColor: '#aaa'
          }}
        />
      }}
      tabBar={(props) => (
        <BottomFabBar
          mode={'default'}
          // Add Shadow for active tab bar button
          focusedButtonStyle={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,
            elevation: 14,
          }}
          // - You can add the style below to show screen content under the tab-bar
          // - It will makes the "transparent tab bar" effect.
          bottomBarContainerStyle={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}
          // bottomBarContainerStyle={{
          //   backgroundColor: 'red',
          // }}
          {...props}
        />
      )}
    >
      <Tab.Screen
        options={{
          tabBarIcon: getTabBarIcon('home'),
          tabBarLabel: 'Today',
          // tabBarActiveTintColor: '#547385',
          // tabBarActiveBackgroundColor: '#30444f',
        }}
        name="Today"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Calendar"
        options={{
          tabBarIcon: getTabBarIcon('calendar'),
          tabBarLabel: 'Calendar',
          // tabBarActiveTintColor: '#738554',
          // tabBarActiveBackgroundColor: '#444f30',
        }}
        component={TabTwoScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: getTabBarIcon('format-list-bulleted'),
          tabBarLabel: 'Messages',
          // tabBarActiveTintColor: '#857354',
          // tabBarActiveBackgroundColor: '#4f4430',
        }}
        name="Messages"
        component={MessagesScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: getTabBarIcon('account-cog'),
          tabBarLabel: 'Settings',
          // tabBarActiveTintColor: '#735485',
          // tabBarActiveBackgroundColor: '#44304f',
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import SplashScreen from '../screens/SplashScreen';
import RegistrationScreen from '../screens/Auth/RegistrationScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import ForgetPassword from '../screens/Auth/ForgetPassword';
import GenderScreen from '../screens/Auth/GenderScreen';
import { ComponentWrapper } from './ComponentWrapper';
import NameScreen from '../screens/Auth/NameScreen';
import Religion from '../screens/Auth/Religion';
import BottomTabBar from './BottomTabBar';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

const stackArray = [
  {
    name: 'LoginSelect',
    component: props => (
      // <ComponentWrapper>
        <SplashScreen {...props} />
      // </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'Login',
    component: props => (
      // <ComponentWrapper>
        <LoginScreen {...props} />
      // </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'bottomtabbar',
    component: props => (
      // <ComponentWrapper>
        <BottomTabBar {...props} />
      // </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'Gender',
    component: props => (
      // <ComponentWrapper>
        <GenderScreen {...props} />
      // </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'NameData',
    component: props => (
      // <ComponentWrapper>
        <NameScreen {...props} />
      // </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'ReligionData',
    component: props => (
      // <ComponentWrapper>
        <Religion {...props} />
      // </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'Registration',
    component: props => (
      // <ComponentWrapper>
        <RegistrationScreen {...props} />
      // </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'ForgetPass',
    component: props => (
      // <ComponentWrapper>
        <ForgetPassword {...props} />
      // </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
  {
    name: 'Profile',
    component: props => (
      // <ComponentWrapper>
        <Profile {...props} />
      // </ComponentWrapper>
    ),
    headerProps: {
      title: 'pro',
      showBack: false,
    },
  },
];

export const PublicRoute = props => {
  const customHeaderStyle = {
    backgroundColor: 'blue',
    shadowOpacity: 0,
    borderWidth: 0,
    borderColor: 'transparent',
    shadowColor: 'transparent',
  };
  return (
    <Stack.Navigator
      screenOptions={{gestureEnabled: false}}
      initialRouteName="renderStartScreen">
      {stackArray.map((item, index) => {
        const isHeader = true;
        return (
          <Stack.Screen
            style={styles.header}
            key={index}
            name={item.name}
            options={optionProps => {
              const {navigation} = optionProps;
              return {
                headerShown: false,
                headerTintColor: 'yellow',
                headerBackTitle: '',
                headerBackTitleVisible: false,
                headerStyle: customHeaderStyle,
                headerLeftContainerStyle: {
                  marginLeft: 12,
                },

                headerLeft: props => {
                  return (
                    <TouchableOpacity
                      style={styles.backBtnStyle}
                      onPress={() => navigation.goBack()}>
                      <Text>Header</Text>
                    </TouchableOpacity>
                  );
                },
              };
            }}>
            {p => <item.component {...p} {...props} />}
          </Stack.Screen>
        );
      })}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#287ced',
  },
  backBtnStyle: {
    backgroundColor: 'red',
  },
});

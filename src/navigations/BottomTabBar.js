import * as React from 'react';
import {StyleSheet, KeyboardAvoidingView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Ionicons';
// import Dashboard from '../Screens/Dashboard';
// import { globalColors } from '../Theme/globalColors';
// import VoterList from '../Screens/VoterList';
// import UserProfile from '../Screens/UserProfile';
// import Filters from '../Screens/Filters';
// import AllMembers from '../Screens/AllMembers';
import {w} from 'walstar-rn-responsive';
import {useSelector} from 'react-redux';
import {globalColors} from '../styles/globalColors';
import GenderScreen from '../screens/Auth/GenderScreen';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import Nearby from '../screens/Nearby';
import Messsage from '../screens/Messsage';

const Tab = createBottomTabNavigator();

export default function BottomTabBar(props) {
  //   const user = useSelector(state => state?.user?.data?.data);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: 'false',
          gestureEnabled: false,
          tabBarStyle: {
            backgroundColor: globalColors.primaryTheme,
            borderColor: globalColors.primaryTheme,
            height: w(13),
          },
        }}>
        <Tab.Screen
          name="First"
          component={GenderScreen}
          options={{
            tabBarLabel: '',
            unmountOnBlur: true,
            tabBarIcon: ({focused}) => (
              <Icon
                style={[
                  styles.tabScreenImage,
                  {color: focused ? globalColors.black : globalColors.white},
                ]}
                name={'home'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Second"
          component={GenderScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <Icon
                style={[
                  styles.tabScreenImage,
                  {color: focused ? globalColors.black : globalColors.white},
                ]}
                name={'card-account-details'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Third"
          component={Messsage}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <Icon2
                style={[
                  styles.tabScreenImage,
                  {color: focused ? globalColors.black : globalColors.white},
                ]}
                name={'message1'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Fifth"
          component={Nearby}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <Icon3
                style={[
                  styles.tabScreenImage,
                  {color: focused ? globalColors.black : globalColors.white},
                ]}
                name={'heart-circle'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Fourth"
          component={Profile}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <Icon
                style={[
                  styles.tabScreenImage,
                  {color: focused ? globalColors.black : globalColors.white},
                ]}
                name={'account-circle'}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <KeyboardAvoidingView></KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  tabScreenImage: {
    fontSize: 30,
    top: 7,
  },
});

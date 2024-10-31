import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Nearby from '../screens/Nearby';
import RecentVisitors from '../screens/RecentVisitors';
import BackButton from '../components/Common/BackButton';
import {View} from 'react-native';
import { globalColors } from '../styles/globalColors';

const Tab = createMaterialTopTabNavigator();

export default function TopTabBar({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 16, fontWeight: 'bold'},
        tabBarStyle: {
          backgroundColor: globalColors.primaryTheme,
          borderColor: globalColors.primaryTheme,
        },
        tabBarActiveTintColor: globalColors.black,
        tabBarInactiveTintColor: globalColors.white,
      }}>
      <Tab.Screen
        name="Nearby"
        component={Nearby}
        options={{
          headerShown: true,
          header: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <BackButton navigation={navigation} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Recent Visitors"
        component={RecentVisitors}
        options={{
          headerShown: true,
          header: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <BackButton navigation={navigation} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

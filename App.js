import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import CityWiseScreen from './Screens/CityWise';
import CurrentScreen from './Screens/Current';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator labeled={false} barStyle={{ backgroundColor: '#3399FF' }} activeColor="black" >
        <Tab.Screen name="Current" component={CurrentScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={26}/>
            ),
          }}/>
        <Tab.Screen name="CityWise" component={CityWiseScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="city" color={color} size={26}/>
            ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
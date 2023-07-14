// Import core libraries
import React, {FC} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import FontAwemoseIcon from 'react-native-vector-icons/FontAwesome'

// Import screens
import {SimpleFormScreen, CameraScreen, FlatListScreen} from '../screens'

const Tab = createBottomTabNavigator()

const BottomTabNavigation: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName

          if (route.name === 'simpleForm') {
            iconName = focused ? 'file-text' : 'file-text-o'
          } else if (route.name === 'camera') {
            iconName = focused ? 'camera' : 'camera'
          } else if (route.name === 'flatList') {
            iconName = focused ? 'list' : 'list'
          }

          // You can return any component that you like here!
          return <FontAwemoseIcon name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name={'simpleForm'} component={SimpleFormScreen} />
      <Tab.Screen name={'camera'} component={CameraScreen} />
      <Tab.Screen name={'flatList'} component={FlatListScreen} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation

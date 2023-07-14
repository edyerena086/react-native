// Import core libraries
import React, {FC} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

// Import screens
import {SimpleFormScreen, CameraScreen, FlatListScreen} from '../screens'

const Tab = createBottomTabNavigator()

const BottomTabNavigation: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'simpleForm'} component={SimpleFormScreen} />
      <Tab.Screen name={'camera'} component={CameraScreen} />
      <Tab.Screen name={'flatList'} component={FlatListScreen} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation

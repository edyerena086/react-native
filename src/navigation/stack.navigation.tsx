// Import core libraries
import React, {FC} from 'react'
import {createStackNavigator} from '@react-navigation/stack'

// Import screens
import {HomeScreen} from '../screens'

const Stack = createStackNavigator()

const StackNavigation: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'home'} component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigation

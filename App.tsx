// Import core libraries
import 'react-native-gesture-handler'
import React, {FC} from 'react'
import {NavigationContainer} from '@react-navigation/native'

// Import navigation
import {StackNavigation} from './src/navigation'

const App: FC = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}

export default App

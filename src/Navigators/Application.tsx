import { Texts } from '@/Constants'
import { HomeScreen, SplashScreen } from '@/Navigators/Stack'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { navigationRef } from './utils'

const Stack = createSharedElementStackNavigator()

const ApplicationNavigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer ref={navigationRef} theme={MyTheme}>
        <StatusBar barStyle={'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Texts.HomeScreen}>
          <Stack.Screen name={Texts.Splash} component={SplashScreen} />
          <Stack.Screen name={Texts.HomeScreen} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
}

export default ApplicationNavigator

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef} from '../navigator/navigationServices';
import FormCreator from '../screens/formCreator/FormCreator';
import FormView from '../screens/formView/FormView';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="FormCreator">
        <Stack.Screen
          name="FormCreator"
          component={FormCreator}
          options={{
            headerTitle: 'Dynamic Form Builder',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="FormView"
          component={FormView}
          options={{headerTitle: 'Form View', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

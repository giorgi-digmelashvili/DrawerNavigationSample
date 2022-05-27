import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator defaultStatus="open">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Support" component={SupportScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

//Screens:

const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is a Home Screen</Text>
    </View>
  );
};

const SupportScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is a Support Screen</Text>
    </View>
  );
};

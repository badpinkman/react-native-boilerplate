import React, { useState, useLayoutEffect, useMemo } from 'react';
import { Image, Switch } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from 'app-screens';
import { RouteNames } from './routes';
import { miLogo } from 'app-assets';
import { commonStyles } from 'app-constants';
import { useTheme } from 'app-theme';
import { setItemToStorage } from 'app-utils';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const { setThemeMode, palette, dark } = useTheme();
  const toggleSwitch = async (toggle: boolean) => {
    setThemeMode(toggle);
    setIsEnabled(toggle);
    await setItemToStorage('is_dark_mode', JSON.stringify(toggle));
  };

  const getThemeModeFromStorage = useMemo(async () => {
    setIsEnabled(dark);
  }, [dark]);

  useLayoutEffect(() => {
    getThemeModeFromStorage;
  }, [getThemeModeFromStorage]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <Image
            source={miLogo}
            resizeMode="contain"
            style={commonStyles.headerImg}
          />
        ),
        headerRight: () => (
          <Switch
            trackColor={{
              false: palette.grayChateau,
              true: palette.whiteEDDFF6,
            }}
            thumbColor={isEnabled ? palette.redPrimary : palette.whiteF5FCFF}
            onValueChange={(val) => toggleSwitch(val)}
            value={isEnabled}
          />
        ),
        headerTitleAlign: 'center',
        headerTintColor: palette.redPrimary,
        headerStyle: {
          backgroundColor: palette.primary,
        },
      }}
    >
      <Stack.Screen
        name={RouteNames.HomeScreen}
        component={HomeScreen}
        initialParams={{ userId: '001' }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

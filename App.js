/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Alert, Linking, Platform, StyleSheet, Text, View} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import InitialScreen from './InitialScreen.js';
import PlayerScreen from './PlayerScreen.js';

const App = createSwitchNavigator({
  initial: {screen: InitialScreen},
  player: {screen: PlayerScreen},
});

const AppContainer = createAppContainer(App);

export default AppContainer;

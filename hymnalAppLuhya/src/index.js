import React from 'react';
import { AppRegistry } from 'react-native';
import HymnalApp from './src/components/HymnalApp';

const App = () => <HymnalApp />;

AppRegistry.registerComponent('MyHymnal', () => App);
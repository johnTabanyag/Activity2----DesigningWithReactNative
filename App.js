import React from 'react';
import {ScrollView, View} from 'react-native';
import Header from './src/components/Header';
import Navigation from './src/components/Navigation';
import Posts from './src/components/Posts';
import Stories from './src/components/Stories';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <Stories />
          <Posts />
        </View>
      </ScrollView>
      <Navigation />
    </View>
  )
};

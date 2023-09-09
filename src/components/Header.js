import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

function Header() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/instagram-text-icon.png')}
        style={styles.logo}
      />
      <View style={styles.actionContainer}>
        <Image 
          source={require('../assets/images/heart-icon.png')}
          style={styles.actionItem}
        />
        <Image 
          source={require('../assets/images/message-icon.png')}
          style={styles.actionItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  logo: {
    width: 120,
    height: 50,
    resizeMode: 'contain'
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionItem: {
    width: 27,
    height: 27,
    resizeMode: 'contain',
    marginLeft: 20,
  }
})

export default Header;
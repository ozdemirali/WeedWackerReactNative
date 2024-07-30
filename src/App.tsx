/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Login from './component/login/login';

function App(){
  return(
    <SafeAreaView style={styles.container}>
     <Login></Login>
    </SafeAreaView>
  );
}

export default App;

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#eceff1",
    alignItems:"center",
    paddingTop:20
  }
});
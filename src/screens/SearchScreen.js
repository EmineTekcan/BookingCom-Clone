import { StyleSheet, Text, View,SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <View 
      style={{
        padding:20,
        margin:10,
        flexDirection:"row",
        justifyContent:"space-between",
        borderColor:"#FFC72C"
        }}>
        <TextInput placeholder='Enter Your Destination' />
        <Feather name="search" size={24} color="black" />
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})
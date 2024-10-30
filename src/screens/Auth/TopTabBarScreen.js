import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopTabBar from '../../navigations/TopTabBar'
import BackButton from '../../components/Common/BackButton'

const TopTabBarScreen = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <TopTabBar/>
    </View>
  )
}

export default TopTabBarScreen

const styles = StyleSheet.create({})
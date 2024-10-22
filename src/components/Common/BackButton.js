import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {lightTheme} from '../../assets/themes';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native-elements';

const BackButton = ({navigation}) => {
  return (
    <>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}>
        <View style={styles.leftContainer}>
          <MaterialIcon
            name="chevron-left-circle-outline"
            size={30}
            color={lightTheme.highlightTextColor}
            style={styles.backIcon}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text styleKey="highlightTextColor" style={styles.textStyle}>
            Back
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default BackButton;

const styles = StyleSheet.create({

  leftContainer: {
    flex: 0,
    justifyContent: 'flex-start',
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  rightContainer: {
    flex: 3,
    justifyContent: 'center',
    paddingTop: 17,
    paddingLeft: 5,
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 25,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: lightTheme.highlightTextColor,
  },
});

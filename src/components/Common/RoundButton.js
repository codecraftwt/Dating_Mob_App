import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function RoundButton({
  onPress,
  label,
  buttonStyle,
  labelStyle,
  buttonColor,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[styles.container, buttonStyle, {backgroundColor: buttonColor}]}>
        <Text
          styleKey="textColor"
          style={[styles.userNameStyle, {color: labelStyle}]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    borderRadius: 20,
    minWidth: 30,
    height: 45,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  userNameStyle: {
    fontWeight: 'bold',
    paddingTop: 0,
    paddingBottom: 2,
    fontSize: 16,
  },
});

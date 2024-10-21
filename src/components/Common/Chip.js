import {StyleSheet} from 'react-native';
import React from 'react';
import {Chip} from 'react-native-elements';

const Chips = ({title, onPress}) => {
  return (
    <Chip
      title={title}
      containerStyle={{
        width: 150,
      }}
      buttonStyle={{
        backgroundColor: 'grey',
        borderWidth: 1,
        borderColor: 'blue',
        margin:4
      }}
      titleStyle={{
        color: 'black',
      }}
      onPress={onPress}
    />
  );
};

export default Chips;

const styles = StyleSheet.create({});

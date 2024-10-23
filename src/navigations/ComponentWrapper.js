import * as React from 'react';
import { StatusBar, View } from 'react-native';
import propTypes from 'prop-types';
// import { globalColors } from '../Theme/globalColors';
import { w } from 'walstar-rn-responsive';

export const ComponentWrapper = ({ children, statusBarColor = "#fff" }) => {
  const { edges } = children.props;

  return (
    <>
      <StatusBar
        barStyle='default'
        animated={true}
        backgroundColor={statusBarColor} // Use the statusBarColor prop
      />
      {/* <View style={{backgroundColor:globalColors.primaryTheme,flexGrow:1,borderBottomRightRadius:40,borderBottomLeftRadius:40}}> */}
      {children}
      {/* </View> */}
    </>
  );
};

ComponentWrapper.propTypes = {
  statusBarColor: propTypes.string,
};

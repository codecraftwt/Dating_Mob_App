import * as React from 'react';
import { StatusBar, View } from 'react-native';
import propTypes from 'prop-types';
// import { globalColors } from '../Theme/globalColors';
import { w } from 'walstar-rn-responsive';

export const ComponentWrapper = (props) => {
  const { edges } = props.children.props
  return (
    <>
      <StatusBar
        barStyle='default'
        animated={true}
        // backgroundColor={globalColors.primaryTheme}
      />
      {/* <View style={{backgroundColor:globalColors.primaryTheme,flexGrow:1,borderBottomRightRadius:40,borderBottomLeftRadius:40}}> */}
      {props.children}
      {/* </View> */}
    </>
  );
};
ComponentWrapper.propTypes = {
  statusBarColor: propTypes.string
}
ComponentWrapper.defaultProps = {
  statusBarColor: "#fff"
}
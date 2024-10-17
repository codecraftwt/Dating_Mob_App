import React, { useState } from 'react';
import { PublicRoute } from './PublicRoute';


const Navigation = props => {
  
  return (
    <> 
      <PublicRoute {...props} />
    </>
  )
}
export default Navigation;
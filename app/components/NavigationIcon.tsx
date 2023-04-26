import React from 'react'
import { Text, View } from "react-native"
const NavigationIcon = ({route,isFocused}) => {
  return (
   <View>
    <Text>
        {route}
    </Text>
   </View>
  )
}

export default NavigationIcon

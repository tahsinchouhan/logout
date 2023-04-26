import React from 'react'
import { Text, View } from 'react-native'

const IntrestCard = ({item}) => {
  return (
   <View className="bg-white rounded-[100px] h-10 w-min text-center px-4 flex flex-row items-center justify-between space-x-2 mr-4">
    {
        item.icon
    }
        <Text className="mx-auto my-auto text-black font-medium text-base">{item.name}</Text>
   </View>
  )
}

export default IntrestCard

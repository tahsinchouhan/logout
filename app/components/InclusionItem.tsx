import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';

const InclusionItem = ({Data}) => {
  const [selected, setSelected] = useState(false);
  return (
    <Pressable
      onPress={() => setSelected(!selected)}
      style={{
        backgroundColor: selected ? '#000' : '#fff',
      }}
      className="px-4 py-2 flex justify-center items-center border border-black rounded-[100px]  mr-4 mb-4">
      <Text
        style={{
          color: selected ? '#fff' : '#000',
        }}
        className="text-sm">
        {Data}
      </Text>
    </Pressable>
  );
};

export default InclusionItem;

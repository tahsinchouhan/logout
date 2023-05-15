import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { FoodSVG, MusicSVG, PaintSVG, SportsSVG } from '../../assets/Icons';

const FilterItem = props => {
  const [selected, setSelected] = useState(false);
  const icons = {
    Sports: <SportsSVG fill={selected ? '#fff' : '#B6B6B6'} />,
    Music: <MusicSVG fill={selected ? '#fff' : '#B6B6B6'} />,
    Food: <FoodSVG fill={selected ? '#fff' : '#B6B6B6'} />,
    Painting: <PaintSVG fill={selected ? '#fff' : '#B6B6B6'} />,
  };

  return (
    <Pressable onPress={() => setSelected(!selected)}>
      <View
        className="px-4 py-2 flex justify-center items-center   rounded-[100px]  mr-4 mb-2 w-16 h-16"
        style={{
          backgroundColor: selected ? '#000' : '#fff',
          borderWidth: props.borderAllow ? 1 : 0,
          borderColor: '#B6B6B6',
        }}>
        {icons[props.Data.name]}
      </View>
      <Text
        style={{
          color: selected ? '#000' : '#B6B6B6',
        }}
        className="text-sm text-center mr-4">
        {props.Data.name}
      </Text>
    </Pressable>
  );
};

export default FilterItem;

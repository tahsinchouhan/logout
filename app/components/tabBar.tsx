
import React from 'react';

import { Dimensions, Pressable, StyleSheet, View } from 'react-native';
import CreateHangoutDrawer from './HomeScreen/CreateHangoutDrawer';
import NavigationIcon from './NavigationIcon';


const {width} = Dimensions.get('window')

const TabBar = ({ state, descriptors, navigation}: any) =>{
  return (
    <View style={styles.mainContainer} >
      {state.routes.map((route: any , index: number) => {
        if(route.name =="Drawer"){
          return (
            <View key={index} className="" >
              <CreateHangoutDrawer/>
            </View>  
          );
        }
        
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key = {index} style = {[styles.mainItemContainer]}>
            <Pressable
              onPress = {onPress}
              // style = {{backgroundColor: isFocused?"#030D16": "#182028", borderRadius: 20, }}
              >
              <View style = {{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <NavigationIcon route={label} isFocused={isFocused}/>
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    backgroundColor: "#000",
    borderRadius: 50,
    marginHorizontal: width*0.08,
    paddingVertical: 6,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    height: 55,  }, 
})


export default TabBar; 

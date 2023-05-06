import React from 'react';
import { ScrollView, View } from 'react-native';
import EventDetailsTabs from '../../components/EventDetailsScreen/EventDetailsTabs';
const EventDetailsScreen = () => {
  return (
    <ScrollView>
      <View></View>
      <View className="h-full min-h-screen">
        <EventDetailsTabs />
      </View>
    </ScrollView>
  );
};

export default EventDetailsScreen;

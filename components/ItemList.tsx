import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import CardItem from "./CardItem";
// @ts-ignore

const ItemList = () => {
  return (
    <View>
      <Text className="text-[#9c9c9c] mb-2 text-sm font-bold">
        Currently in Season
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row gap-2 py-2"
      >
        <CardItem />
        <CardItem />
        <CardItem />
      </ScrollView>
    </View>
  );
};

export default ItemList;

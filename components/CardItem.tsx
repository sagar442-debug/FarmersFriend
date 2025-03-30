import { View, Text, Image } from "react-native";
import React from "react";
// @ts-ignore
import CabbageImage from "../assets/vegetables/cabbagePlaceholder.png";

const CardItem = () => {
  return (
    <View
      className="bg-white rounded-lg p-4 mr-6 h-24"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3,
      }}
    >
      <View className="flex-row gap-2 items-center">
        <Image source={CabbageImage} className="w-10 h-10" />
        <View className="max-w-52">
          <Text className="text-black text-sm font-bold">Cabbage</Text>
          <Text className="text-[#9c9c9c] text-xs">
            Cabbage, comprising several cultivars of Brassica oleracea, is a
            leafy green, red, ...
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardItem;

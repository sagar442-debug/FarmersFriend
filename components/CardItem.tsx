import { View, Text, Image } from "react-native";
import React from "react";
// @ts-ignore
import CabbageImage from "../assets/vegetables/cabbagePlaceholder.png";

const CardItem = ({ common_name, scientific_name, default_image }: Plant) => {
  return (
    <View
      className="bg-white rounded-lg flex-row items-center p-2 mr-6 h-28"
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
        <Image
          source={{ uri: default_image?.medium_url }}
          className="w-12 h-12 rounded-full"
        />
        <View className="max-w-52">
          <Text className="text-black text-sm font-bold">
            {common_name ? common_name : "Unknown"}
          </Text>
          <Text className="text-[#9c9c9c] text-[8px] font-bold">
            Scientific Name: {scientific_name ? scientific_name : "Unknown"}
          </Text>
          <Text className="text-[#9c9c9c] text-xs mt-1" numberOfLines={2}>
            Cabbage, comprising several cultivars of Brassica oleracea and what
            not
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardItem;

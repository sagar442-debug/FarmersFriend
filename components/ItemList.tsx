import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import SkeletonCard from "./SkeletonCard";
import { getPlants } from "@/services/api";
import useFetch from "@/services/useFetch";
// @ts-ignore

const ItemList = () => {
  const { data: plantsData, loading, error } = useFetch(() => getPlants());

  const renderSkeletons = () => (
    <FlatList
      data={[1, 2, 3]} // Show 3 skeleton cards
      renderItem={() => <SkeletonCard />}
      keyExtractor={(item) => item.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="flex-row gap-2 py-2"
    />
  );

  return (
    <View>
      <Text className="text-[#9c9c9c] mb-2 text-sm font-bold">
        Currently in Season
      </Text>
      {loading ? (
        renderSkeletons()
      ) : (
        <FlatList
          data={plantsData?.data}
          renderItem={({ item }) => <CardItem {...item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row gap-2 py-2"
        />
      )}
    </View>
  );
};

export default ItemList;

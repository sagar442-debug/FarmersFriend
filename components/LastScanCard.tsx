import { View, Text, Image } from "react-native";
import CabbageImage from "../assets/vegetables/cabbagePlaceholder.png";

const LastScanCard = () => {
  return (
    <View
      className="bg-white rounded-2xl py-6 px-5"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 10,
      }}
    >
      <View className="flex-row items-center max-w-[384px]">
        <View className="flex-row items-start justify-between mr-5">
          <Image source={CabbageImage} className="w-10 h-10" />
        </View>
        <View className="max-w-[280px]">
          <View className="flex-col items-start justify-between">
            <Text className="text-[#9c9c9c] text-xs font-bold">
              Last Scanned
            </Text>
            <Text className="text-[#9c9c9c] text-[8px]">2025-03-24 19:30</Text>
          </View>
          <View>
            <Text className="text-black text-sm font-bold">
              Cabbage | Brassica oleracea |
            </Text>
            <Text className="text-[#9c9c9c] text-xs ">
              Cabbage, comprising several cultivars of Brassica oleracea, is a
              leafy green, red, ...
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LastScanCard;

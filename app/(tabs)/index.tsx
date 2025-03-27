import { Image, ScrollView, ScrollViewBase, Text, View } from "react-native";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
// @ts-ignore
import BackgroundImage from "../../assets/images/hikingBgPicture.svg";
// @ts-ignore
import CabbageImage from "../../assets/vegetables/cabbagePlaceholder.png";
import LastScanCard from "@/components/LastScanCard";
import CardItem from "@/components/ItemList";
import ItemList from "@/components/ItemList";

type UserData = {
  name: String;
  email: String;
  phone: String;
  address: String;
  city: String;
  state: String;
  zip: String;
};
export default function Index() {
  const userData: UserData = {
    name: "Sagar",
    email: "sagar@gmail.com",
    phone: "+1234567890",
    address: "123 Main St, Anytown, USA",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  };
  return (
    <SafeAreaView className="flex-1 bg-[#F37D2D]">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <View className="flex-row items-center justify-between px-10 ">
          <View className=" ">
            <Image
              source={require("../../assets/images/profilepic.png")}
              className="w-10 h-10 rounded-full mb-2"
            />
            <Text className="text-white text-xl font-poppins-semibold leading-6">
              Hello,{"\n"}
              {userData.name}
            </Text>
            <Text className="text-[#DFDFDF] leading-tightest text-[8px] mt-2 leading-3 font-poppins">
              Lets get started with your journey!
            </Text>
          </View>
          <View>
            <BackgroundImage />
          </View>
        </View>
        <View className="bg-[#F0F2F4] rounded-t-[35px]">
          <View className="flex-1 items-center py-10">
            <View className="flex-row  justify-between">
              <LastScanCard />
            </View>
          </View>
          <View className="px-5 mb-4">
            <ItemList />
          </View>
          <View className="px-5 mb-4">
            <ItemList />
          </View>
          <View className="px-5 mb-4">
            <ItemList />
          </View>
          <View className="pb-32" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

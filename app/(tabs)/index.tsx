import { Image, ScrollView, Text, View } from "react-native";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import BackgroundImage from "../../assets/images/hikingBgPicture.svg";

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
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: "123 Main St, Anytown, USA",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  };
  return (
    <SafeAreaView className="flex-1 bg-[#F37D2D]">
      <View className="flex-row justify-between px-10 items-center ">
        <View className="flex-col justify-center ">
          <Image
            source={require("../../assets/images/profilepic.png")}
            className="w-10 h-10 rounded-full mb-2"
          />
          <Text className="text-white text-xl font-poppins font-bold leading-6">
            Hello, {userData.name}
          </Text>
          <Text className="text-[#DFDFDF] leading-tightest text-xs mt-2 leading-3 font-poppins">
            Lets get started with your journey!
          </Text>
        </View>
        <View>
          <BackgroundImage />
        </View>
      </View>
      <View className="flex-1 items-center bg-white rounded-t-[35px]">
        <View className="">
          <View>
            <Text className="text-black text-2xl font-poppins font-bold">
              Hello
            </Text>
          </View>
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

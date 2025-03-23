import { Text, View } from "react-native";
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
    name: "Sagar Sapkota",
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
        <View className=" ">
          <Text className="text-white font-bold">
            Hello,{"\n"}
            {userData.name}
          </Text>
        </View>
        <View>
          <BackgroundImage />
        </View>
      </View>
      <View className="flex-1 items-center bg-white rounded-t-[35px]">
        <View className="">
          <View>
            <Text>Hello</Text>
          </View>
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
}
